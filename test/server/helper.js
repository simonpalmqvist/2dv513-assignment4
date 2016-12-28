

module.exports.data = function () {
  return {
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
    },

    today: false,

    getUser () {
      return '345f804bfb3e6cdef3abb68f90489834'
    },

    findRecipe (user) {
      if (this.today) {
        return this.recipe
      }
    },

    getNewRecipe (user) {
      return this.recipe
    }
  }
}
