import express from 'express'
import { config } from 'dotenv'

config()
const server = express()



const PORT = process.env.PORT || 3000
server.listen(PORT)