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
})
