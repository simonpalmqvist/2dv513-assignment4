const {Router} = require("express")
const router = Router()

module.exports = function () {
    router.route('/recipe')
      .get((request, response) => {
        response
          .json({
            user: '345f804bfb3e6cdef3abb68f90489834',
            recipe: {
              name: 'Pasta',
              image: 'http://lol.lol',
              ingredients: [
                {name: 'Salt'},
                {name: 'Spaghetti', amount: '400', amount_type: 'g'}
              ],
              instructions: [
                {step: 1, description: 'LAGA!'}
              ]
            }
          })
      })
    return router
}
