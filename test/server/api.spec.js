const {it, describe} = require('mocha')
const request = require('supertest')
const app = require('../../src/server')()

describe('API', function () {
  describe('GET unknown path', function () {
    it('Should result in 404', function (done) {
      request(app)
        .get('/blablabla')
        .expect(404, done)
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

    it('Should respond with a recipe', function (done) {
      request(app)
        .get('/api/recipe')
        .set('Accept', 'application/json')
        .expect({
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
        }, done)
    })
  })
})
