import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import { AppError } from './utils/AppError'
import { ZodError } from 'zod'

const server = express()
server.use(express.json())
server.use(routes)


server.use((error: any, request: Request, response: Response, _: NextFunction) => {

  if ( error instanceof AppError ) {
    return response.status(error.statusCode).json({ mensagemDeErro: error.message })
  }

  if ( error instanceof ZodError ) {
    return response.status(400).json({ message: "Validation errado! Olá", issues: error.format() })
  }

  response.status(500).json({ mensagem: error.message })

})


const PORT = 3333
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))   