import express from 'express'
import { config } from 'dotenv'
import { router } from '../src/routes/routes'

config()
const server = express()
server.use(router)
server.use(express.json())

// server.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000
server.listen(PORT)