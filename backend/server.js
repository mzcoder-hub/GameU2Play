import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from 'cors'
import { HttpException } from './utils/HttpException.utils.js'
import { errorMiddleware } from './middleware/error.middleware.js'
import userRouter from './routes/user.route.js'

// Init express
const app = express()
// Init environment
dotenv.config()
// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json())

// enabling cors for all requests by using cors middleware
app.use(cors())
// Enable pre-flight
app.options('*', cors())

app.use(`/api/v1/users`, userRouter)

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
