import express from 'express'
import { routes } from "./routes/"
import { errorHandler } from './middlewares/errorHandler'
import { knex } from '../src/database/knex'


const PORT = 3333
const server = express()

server.use(express.json())
server.use(routes)
server.use(errorHandler)
server.use(knex)

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})

