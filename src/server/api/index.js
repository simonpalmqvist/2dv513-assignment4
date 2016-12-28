const {Router} = require("express")
const router = Router()

module.exports = function (data) {
  router.route('/user')
    .get((request, response) => {
      data
        .getUser()
        .then((result) => result.rows[0])
        .then(({id}) => response.json({user: id}))
        .catch(() => response.sendStatus(500))
    })

  router.route('/recipe')
    .get((request, response) => {
      const {user} = request.query

      if (!user) {
        return response.sendStatus(400)
      }

      data
        .findRecipe(user)
        .then((recipe) => response.json({recipe}))
        .catch(() => response.json({}))
    })

  router.route('/recipe/new')
    .get((request, response) => {
      const {user} = request.query

      if (!user) {
        return response.status(400).send('400 no user')
      }

      data
        .getNewRecipe(user)
        .then((recipe) => response.json({recipe}))
        .catch((error) => {
          console.log(error)
          response.status(400).send('400 Bad request')
        })
    })
  return router
}
