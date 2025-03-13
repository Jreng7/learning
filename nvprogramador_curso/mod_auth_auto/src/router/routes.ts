import { Router, Request, Response } from 'express';

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  return response.status(201).json({ message: "Rota ok"})
})


export { routes }