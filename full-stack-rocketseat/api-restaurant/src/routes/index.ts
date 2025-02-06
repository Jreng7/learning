import { Router } from 'express'
import { productsRoutes } from '@/routes/products-routes.js'

export const routes = Router()

routes.use('/products', productsRoutes)