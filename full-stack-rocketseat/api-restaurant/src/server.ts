import express from 'express'
import { routes } from "./routes/"
import { errorHandler } from './middlewares/errorHandler'

const PORT = 3333
const server = express()

server.use(express.json())
server.use(routes)

server.use(errorHandler)

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})

