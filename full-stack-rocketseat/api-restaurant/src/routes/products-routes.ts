import { Router } from 'express'
import { ProductController } from '@/controllers/ProductController.js'


export const productsRoutes = Router()

const productController = new ProductController()


productsRoutes.get('/', productController.getAll)
productsRoutes.post('/', productController.create)
productsRoutes.put('/:id', productController.update)
productsRoutes.delete('/:id', productController.delete)