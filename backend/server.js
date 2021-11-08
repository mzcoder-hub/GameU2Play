import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
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

app.use(
  '/api/v1/uploads',
  express.static(path.join(__dirname, '/frontend/public/images'))
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

// Error middleware
app.use(errorMiddleware)

const port = Number(process.env.PORT || 3331)

// starting the server

app.listen(port, console.log(`🚀 Server running on port ${port}!`.yellow.bold))
