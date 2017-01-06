const ObjectId = require('mongodb').ObjectID

const USERS = 'users'
const RECIPES = 'recipes'

module.exports = function (db) {
  return {
    getUser () {
      return db
        .collection(USERS)
        .insertOne({ history: []})
        .then((result) => result.insertedId)
    },

    findRecipe (user) {
      today = new Date()
      today.setHours(0)
      today.setMinutes(0)
      today.setSeconds(0)

      return db
        .collection(USERS)
        .aggregate([
          { '$match': { '_id': ObjectId(user) } },
          { '$unwind': '$history' },
          { '$match': { 'history.date': { '$gte': today } } },
          { '$lookup': {
            'from': 'recipes',
            'localField': 'history.recipe_id',
            'foreignField': '_id',
            'as': 'recipe' }
          },
          { '$unwind': '$recipe' },
          { '$project': { 'recipe': 1 } }
        ])
        .next()
        .then(({recipe}) => recipe)
    },

    getNewRecipe (user) {
      let notMadeRecipeQuery
      let newRecipe

      return db
        .collection(USERS)
        //Find Random recipe
        .aggregate([
          { '$match': { '_id': ObjectId(user)} },
          { '$unwind': '$history' },
          { '$sort': { 'history.date': -1 } },
          { '$limit': 2 }
        ])
        .map((d) => d.history.recipe_id)
        .next()
        .then((history) => Array.isArray(history) ? history : [history] )
        .then((history) => notMadeRecipeQuery = { '_id': { '$nin' : history } })
        .then(() => db.collection(RECIPES).count(notMadeRecipeQuery))
        .then((matchingRecipes) => Math.floor(Math.random() * matchingRecipes))
        .then((randomRecipe) => db.collection(RECIPES).find(notMadeRecipeQuery).limit(1).skip(randomRecipe).next())
        .then((recipe) => newRecipe = recipe)
        // Store recipe in history this will throw error if recipe is empty
        .then(() => db.collection(USERS).update(
          {
            '_id': ObjectId(user)
          },
          {
            '$push': {
              'history' : {
                'recipe_id': newRecipe._id,
                'date': new Date()
              }
            }
          }
        ))
        // Return new recipe
        .then(() => newRecipe)
    }
  }
}
