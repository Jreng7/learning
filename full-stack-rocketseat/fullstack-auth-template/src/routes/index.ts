import { Router } from "express"

import { sessionsRoutes } from "./sessions.routes"
import { productsRoutes } from "./products.routes"

export const routes = Router()

routes.use("/sessions", sessionsRoutes)
routes.use("/products", productsRoutes)


