import express from 'express'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import Grid from 'gridfs-stream'
import { Authentication } from './middleware/authentication.js'
import 'dotenv/config'
import { router } from './routes/homeRouter.js'

const PORT = process.env.PORT || 5000

const app = express()

// Connection string to MongoDb
const CONNECTION_STRING = `${process.env.DB_URL}`

// Connect to database
mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
})

// Mongoose connection
const conn = mongoose.connection
Grid.mongo = mongoose.mongo
conn.on('error', console.error.bind(console, 'connection error:'))

let gfs
conn.once('open', function() {
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
        "'unsafe-inline'",
      ],
      fontSrc: ["'self'", 'fonts.googleapis.com', 'fonts.gstatic.com'],
      imgSrc: ["'self'", 'maps.googleapis.com', 'maps.gstatic.com', 'data:'],
      scriptSrc: ["'self'", 'maps.googleapis.com', "'unsafe-inline'"],
    },
  })
)

app.use(helmet())

// Serve files from the public folder
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Set gfs as middleware
app.use((req, res, next) => {
  req.gfs = gfs
  next()
})

app.use('/api/v1', router)

app.use((err, req, res, next) => {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
