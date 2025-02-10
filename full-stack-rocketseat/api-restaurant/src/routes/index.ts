import { Router } from 'express'

import { productsRoutes } from '@/routes/products-routes.js'
import { tablesRoutes } from '@/routes/tables-routes'
import { tablesSessions } from './tables_sessions-routes'

const routes = Router()

routes.use('/products', productsRoutes)
routes.use('/tables', tablesRoutes)
routes.use('/tables-sessions', tablesSessions)

export { routes }