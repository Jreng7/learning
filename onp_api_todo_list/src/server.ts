import express from 'express'
import { config } from 'dotenv'
import { router } from '../src/routes/routes'

config()
const server = express()

server.use(express.json())
server.use(router)


const PORT = process.env.PORT || 3000
server.listen(PORT)