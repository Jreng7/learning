import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'

const server = express()
server.use(express.json())
server.use(routes)


server.use((error: any, request: Request, response: Response, _: NextFunction) => {
  response.status(500).json({mensagem: error.message})
})

const PORT = 3333
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))