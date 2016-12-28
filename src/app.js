const app = require('./server')

http
  .createServer(app())
  .listen(3000, () => console.log(`App listening on port 3000`))
