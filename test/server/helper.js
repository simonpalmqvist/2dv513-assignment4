
const user = '345f804bfb3e6cdef3abb68f90489834'

const recipe = {
  id: '1',
  name: 'Pasta',
  image: 'http://lol.lol',
  tag: 'Läckert'
}

const ingredients = [
  {name: 'Salt'},
  {name: 'Spaghetti', amount: '400', amount_type: 'g'}
]

const instructions = [
  {step: 1, description: 'LAGA!'}
]

const fullRecipe = {
  recipe: Object.assign({ingredients, instructions}, recipe)
}

module.exports = {
  user,
  recipe,
  ingredients,
  instructions,
  fullRecipe
}
