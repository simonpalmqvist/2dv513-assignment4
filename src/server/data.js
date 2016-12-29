const queries = require('./queries')

module.exports = function (db) {
  return {
    getUser () {
      return db.query(queries.newUserQuery)
    },

    findRecipe (user) {
      let recipe = null

      return db.query(queries.getRecipeQuery, [user])
        .then((result) => result.rows[0])
        .then(({id, name, image, tag}) => recipe = {id, name, image, tag})
        .then(() => db.query(queries.getIngredientsQuery, [recipe.id]))
        .then((result) => recipe.ingredients = result.rows)
        .then(() => db.query(queries.getInstructionsQuery, [recipe.id]))
        .then((result) => recipe.instructions = result.rows)
        .then(() => recipe)
    },

    getNewRecipe (user) {
      let recipe = null

      return db
        .query(queries.getNewRecipeQuery, [user])
        .then((result) => result.rows[0])
        .then(({id, name, image, tag}) => recipe = {id, name, image, tag})
        .then(() => db.query(queries.getIngredientsQuery, [recipe.id]))
        .then((result) => recipe.ingredients = result.rows)
        .then(() => db.query(queries.getInstructionsQuery, [recipe.id]))
        .then((result) => recipe.instructions = result.rows)
        .then(() => recipe)
    }
  }
}
