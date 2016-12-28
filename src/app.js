const http = require('http')
const pg = require('pg')
const app = require('./server')
const data = require('./server/data')

const db = new pg.Client()

db.connect((error) => {
  if (error) {
    throw error
  }

  http
    .createServer(app(data(db)))
    .listen(3000, () => console.log(`App listening on port 3000`))
}
