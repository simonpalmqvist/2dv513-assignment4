# Queries

## Create a new user and return id
```
db.users.insertOne({ 'history': [] });
```

### Check so user exists
```
!!db.users.findOne({ '_id': ObjectId('586f5e1af3f367664f2d37ea') });
```

## Find a random recipe
```
// Finds two last recipes made for user
history = db.users.aggregate([
  { '$match': { '_id': ObjectId('586f5e1af3f367664f2d37ea')} },
  { '$unwind': '$history' },
  { '$sort': { 'history.date': -1 } },
  { '$limit': 2 }
]).map((d) => d.history.recipe_id);

notMadeRecipeQuery = { '_id': { '$nin' : history } };

matchingRecipes = db.recipes.count(notMadeRecipeQuery);
randomRecipe = Math.floor(Math.random() * matchingRecipes);

//Fetch one random recipe
db.recipes.find(notMadeRecipeQuery).limit(1).skip(randomRecipe);
```

## Store recipe in history
```
db.users.update(
  {
    '_id': ObjectId('586f5e1af3f367664f2d37ea')
  },
  {
    '$push': {
      'history' : {
        'recipe_id': ObjectId('586f6f5384921416e3e453ac'),
        'date': ISODate()
      }
    }
  }
)
```

## Find todays recipe
```
date = ISODate();
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

db.users.aggregate([
  { '$match': { '_id': ObjectId('586f5e1af3f367664f2d37ea') } },
  { '$unwind': '$history' },
  { '$match': { 'history.date': { '$gte': date } } },
  { '$lookup': { 'from': 'recipes', 'localField': 'history.recipe_id', 'foreignField': '_id', 'as': 'recipe' } },
  { '$unwind': '$recipe' },
  { '$project': { 'recipe': 1 } }
]);
```
