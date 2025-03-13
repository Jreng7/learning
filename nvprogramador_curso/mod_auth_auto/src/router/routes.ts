import { Router, Request, Response } from 'express';

const routes = Router()

routes.post('/auth', (request: Request, response: Response) => {
  return response.status(201).json({ message: "Rota ok"})
})


routes.post('/auth/refreshtoken', (request: Request, response: Response) => {
  return response.status(201).json({ message: "Rota ok"})
})


export { routes }