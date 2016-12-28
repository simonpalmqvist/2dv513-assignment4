const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const path = require('path')
const api = require('./api')

module.exports = function (data) {
  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(express.static(`${__dirname}/../public`))

  app.use('/api', api(data))

  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'))
  })

  app.use((request, response) => {
    response
      .status(404)
      .send('404 Lost?')
  })

  return app
}
