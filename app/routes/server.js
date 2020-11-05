// require dependencies 
// require ExpressJS
const express = require('express')

const mongoose = require('mongoose')

const eventRoutes = require('./routes/event_routes')

// require database configuration 
const db = require('./config/db')

// require middleware
const cors = require('cors')
const errorHandler = require('./lib/error_handler')
const requestLogger = require('./lib/request_logger')
const auth = require('./lib/auth')

// connect to MongoDB database (using Mongoose)
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// create new express application
const app = express()

// allow JSON in requests
app.use(express.json())

app.use(eventRoutes)

// have app use CORS
app.use(cors())

// use requestLogger to log requests
app.use(requestLogger)

// define route GET to / that responds with Hello World!
app.get('/', (req, res) => res.send('Hello World!'))

// use the errorHandler to handle errors 
// whenever the "next" method is called inside of a ".catch",
// this middleware will run and send an error response to client
app.use(errorHandler)


// start application on port 4741
app.listen(4741, () => console.log('Example app listening on port 4741!'))