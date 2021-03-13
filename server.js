'use strict'

const express = require('express')
const helmet = require('helmet')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const authentication = require('./middleware/authentication')
const Grid = require('gridfs-stream')

const PORT = process.env.PORT || 5000

// Connection string to MongoDb
const CONNECTION_STRING = `${process.env.DB_URL}`

// Connect to database
mongoose.connect(
  CONNECTION_STRING,
  { useNewUrlParser: true, useCreateIndex: true }
)

// Mongoose connection
const conn = mongoose.connection
Grid.mongo = mongoose.mongo
conn.on('error', console.error.bind(console, 'connection error:'))

let gfs
conn.once('open', function () {
  // Init stream
  gfs = Grid(conn.db)
  gfs.collection('images')

  console.log(`Connected to database ${process.env.DB_NAME}!`)
})

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: [
        "'self'",
        'stackpath.bootstrapcdn.com',
        'fonts.googleapis.com',
        "'unsafe-inline'"
      ],
      fontSrc: ["'self'", 'fonts.googleapis.com', 'fonts.gstatic.com'],
      imgSrc: ["'self'", 'maps.googleapis.com', 'maps.gstatic.com', 'data:'],
      scriptSrc: ["'self'", 'maps.googleapis.com', "'unsafe-inline'"]
    }
  })
)

app.use(helmet())

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Set gfs as middleware
app.use((req, res, next) => {
  req.gfs = gfs
  next()
})

app.use('/api/getAnimals', require('./routes/getAnimalsRouter'))
app.use('/api/user', require('./routes/userRouter'))
app.use('/api/diary', require('./routes/diaryRouter'))

app.get('/api/isAuthenticated', authentication, (req, res, next) => {
  try {
    res.status(200).json({ message: 'Authenticated' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
