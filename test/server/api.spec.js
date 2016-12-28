const {it, describe} = require('mocha')
const request = require('supertest')
const td = require('testdouble')
const server = require('../../src/server')
const data = require('../../src/server/data')
const {
  newUserQuery,
  getRecipeQuery,
  getIngredientsQuery,
  getInstructionsQuery
} = require('../../src/server/queries')
const {user, recipe, ingredients, instructions, fullRecipe} = require('./helper')

const dbMock = {}
const app = server(data(dbMock))

describe('API', function () {

  beforeEach(function () {
    dbMock.query = td.function()
    td.when(dbMock.query(newUserQuery)).thenResolve({rows: [{id: user}]})
    td.when(dbMock.query(getRecipeQuery, [user])).thenResolve({rows: [recipe]})
    td.when(dbMock.query(getRecipeQuery, ['blaj'])).thenResolve({rows: []})
    td.when(dbMock.query('new', [user])).thenResolve({rows: [recipe]})
    td.when(dbMock.query(getIngredientsQuery, [recipe.id])).thenResolve({rows: ingredients})
    td.when(dbMock.query(getInstructionsQuery, [recipe.id])).thenResolve({rows: instructions})
  })

  describe('GET unknown path', function () {
    it('Should result in 404', function (done) {
      request(app)
        .get('/blablabla')
        .expect(404, done)
    })
  })

  describe('GET /api/user', function () {
    it('Should respond with json', function (done) {
      request(app)
        .get('/api/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('Should respond with a new user id', function (done) {
      request(app)
        .get('/api/user' )
        .set('Accept', 'application/json')
        .expect({user}, done)
    })
  })

  describe('GET /api/recipe', function () {
    it('Should respond with json', function (done) {
      request(app)
        .get('/api/recipe?user=' + user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('Should respond without a recipe if not today', function (done) {
      request(app)
        .get('/api/recipe?user=blaj')
        .set('Accept', 'application/json')
        .expect({}, done)
    })

    it('Should respond with a recipe if today', function (done) {
      request(app)
        .get('/api/recipe?user=' + user)
        .set('Accept', 'application/json')
        .expect(fullRecipe, done)
    })
  })

  describe('GET /api/recipe/new', function () {

    it('Should respond with json', function (done) {
      request(app)
        .get('/api/recipe/new?user=' + user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('Should respond with a recipe', function (done) {
      request(app)
        .get('/api/recipe/new?user=' + user)
        .set('Accept', 'application/json')
        .expect(fullRecipe, done)
    })
  })
})
