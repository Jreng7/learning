import { Router, Request, Response } from 'express'
import { myMiddleware } from '../middlewares/myMiddleware'


const productsRoutes = Router()


// server.use(myMiddleware)  Middleware Global (Aplica para todas as rotas abaixo dele.)
productsRoutes.get('/products', (request: Request, response: Response) => {
  const { page, limit } = request.query
  response.send(`As query params são "${page}" e "${limit}"`)
})

productsRoutes.post('/products', myMiddleware, (request: Request, response: Response) => {
  const { name, price } = request.body
  response.status(201).json({produto: name, preco: price, user_id: request.user_id})
})

export { productsRoutes }