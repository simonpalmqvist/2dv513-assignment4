const queries = require('./queries')

module.exports = function (db) {
  return {
    getUser () {
      return db.query(queries.newUserQuery)
    },

    findRecipe (user) {
      return db.query('find')
    },

    getNewRecipe (user) {
      return db.query('new')
    }
  }
}
