const {Router} = require("express")
const router = Router()

module.exports = function (data) {
  router.route('/user')
    .get((request, response) => {
      data
        .getUser()
        .then((result) => result.rows[0])
        .then(({user}) => response.json({user}))
        .catch(() => response.sendStatus(500))
    })

  router.route('/recipe')
    .get((request, response) => {
      response
        .json({
          recipe: data.findRecipe()
        })
    })

  router.route('/recipe/new')
    .get((request, response) => {
      response
        .json({
          recipe: data.getNewRecipe()
        })
    })
  return router
}
