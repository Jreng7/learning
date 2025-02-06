import { Router } from 'express'
import { ProductController } from '@/controllers/products-controller.js'


export const productsRoutes = Router()
const productController = new ProductController()


productsRoutes.get('/', productController.index)

