const {it, describe} = require('mocha')
const request = require('supertest')
const td = require('testdouble')
const server = require('../../src/server')
const data = require('../../src/server/data')
const queries = require('../../src/server/queries')

const dbMock = {}
const app = server(data(dbMock))

describe('API', function () {

  beforeEach(function () {
    dbMock.query = td.function()
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
      td.when(dbMock.query(queries.newUserQuery)).thenResolve({
        rows: [{user: 'user'}]
      })

      request(app)
        .get('/api/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('Should respond with a new user id', function (done) {
      let user = '345f804bfb3e6cdef3abb68f90489834'
      td.when(dbMock.query(queries.newUserQuery)).thenResolve({
        rows: [{user}]
      })

      request(app)
        .get('/api/user')
        .set('Accept', 'application/json')
        .expect({user}, done)
    })
  })

  describe('GET /api/recipe', function () {
    it('Should respond with json', function (done) {
      request(app)
        .get('/api/recipe')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('Should respond without a recipe if not today', function (done) {
      request(app)
        .get('/api/recipe')
        .set('Accept', 'application/json')
        .expect({}, done)
    })

    it.skip('Should respond with a recipe if today', function (done) {
      request(app)
        .get('/api/recipe')
        .set('Accept', 'application/json')
        .expect({recipe: dataMock.recipe}, done)
    })
  })

  describe('GET /api/recipe/new', function () {
    it('Should respond with json', function (done) {
      request(app)
        .get('/api/recipe/new')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it.skip('Should respond with a recipe', function (done) {
      request(app)
        .get('/api/recipe/new')
        .set('Accept', 'application/json')
        .expect({
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
        }, done)
    })
  })
})
