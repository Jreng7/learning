import { Router } from "express"
import { loginRoutes } from "./login.routes"
import { productsRoutes } from "./products.routes"


export const routes = Router()


routes.use("/login", loginRoutes)
routes.use("/products", productsRoutes)


