import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

// Init express
const app = express()
// Init environment
dotenv.config()
// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json())

const port = Number(process.env.PORT || 3331)

// starting the server

app.listen(port, console.log(`🚀 Server running on port ${port}!`.yellow.bold))
