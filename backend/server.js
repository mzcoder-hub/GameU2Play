import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import { HttpException } from './utils/HttpException.utils.js'
import { errorMiddleware } from './middleware/error.middleware.js'
import userRouter from './routes/user.route.js'
import postRouter from './routes/posts.route.js'
import uploadRouter from './routes/upload.route.js'
import categoryRouter from './routes/category.route.js'
import tournamentRouter from './routes/tournament.route.js'
import path from 'path'

// Init express
const app = express()

// Init environment
dotenv.config()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json())

// enabling cors for all requests by using cors middleware
app.use(cors())
// Enable pre-flight
app.options('*', cors())

app.use(`/api/v1/users`, userRouter)
app.use(`/api/v1/posts`, postRouter)
app.use(`/api/v1/tournament`, tournamentRouter)
app.use(`/api/v1/category`, categoryRouter)
app.use('/api/v1/uploads', uploadRouter)

const __dirname = path.resolve()

// console.log(path.join(__dirname, '/uploads/assets/images'))

app.use(
  '/api/v1/uploads',
  express.static(path.join(__dirname, '/uploads/assets/images'))
)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/client/build')))
  // app.get('/admin', (req,res))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API Running')
  })
}

// 404 error
app.all('*', (req, res, next) => {
  const err = new HttpException(404, 'Endpoint Not Found')
  next(err)
})

const getActualRequestDurationInMilliseconds = (start) => {
  const NS_PER_SEC = 1e9 //  convert to nanoseconds
  const NS_TO_MS = 1e6 // convert to milliseconds
  const diff = process.hrtime(start)
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

let demoLogger = (req, res, next) => {
  //middleware function
  let current_datetime = new Date()
  let formatted_date =
    current_datetime.getFullYear() +
    '-' +
    (current_datetime.getMonth() + 1) +
    '-' +
    current_datetime.getDate() +
    ' ' +
    current_datetime.getHours() +
    ':' +
    current_datetime.getMinutes() +
    ':' +
    current_datetime.getSeconds()
  let method = req.method
  let url = req.url
  const start = process.hrtime()
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start)
  let log = `[${formatted_date}] ${method}:${url} ${durationInMilliseconds.toLocaleString()} ms`
  console.log(log)
  fs.appendFile('request_logs.txt', log + '\n', (err) => {
    if (err) {
      console.log(err)
    }
  })
  next()
}

app.use(demoLogger)

// Error middleware
app.use(errorMiddleware)

const port = Number(process.env.PORT || 3331)

// starting the server

app.listen(port, console.log(`🚀 Server running on port ${port}!`.yellow.bold))
