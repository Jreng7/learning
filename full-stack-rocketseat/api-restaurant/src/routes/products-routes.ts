import { Router } from 'express'
import { ProductController } from '@/controllers/products-controller.js'
import { TablesController } from '@/controllers/tables-controller'


export const productsRoutes = Router()
export const tablesRoutes = Router()

const productController = new ProductController()
const tablesController = new TablesController()


productsRoutes.get('/', productController.getAll)
productsRoutes.post('/', productController.create)
productsRoutes.put('/:id', productController.update)
productsRoutes.delete('/:id', productController.delete)


tablesRoutes.get('/', tablesController.index)
tablesRoutes.post('/', tablesController.create)
tablesRoutes.put('/:id', tablesController.update)
tablesRoutes.delete('/:id', tablesController.remove)