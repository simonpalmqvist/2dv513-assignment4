const http = require('http')
const app = require('./server')
const data = require('./server/data')
const { MongoClient } = require('mongodb')

const url = 'mongodb://db:27017'

MongoClient.connect(url)
  .then((db) => {
    http
      .createServer(app(data(db)))
      .listen(3000, () => console.log(`App listening on port 3000`))
  })
