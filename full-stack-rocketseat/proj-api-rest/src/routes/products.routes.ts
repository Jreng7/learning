import { Router } from 'express'
import { myMiddleware } from '../middlewares/myMiddleware'
import { ProductsController } from '../controllers/ProductsController'


export const productsRoutes = Router()
const productsController = new ProductsController()


// server.use(myMiddleware)  Middleware Global (Aplica para todas as rotas abaixo dele.)

productsRoutes.get('/', productsController.getAll)
productsRoutes.post('/', myMiddleware, productsController.create)


