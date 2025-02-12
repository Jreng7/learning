import { Router } from 'express'
import { userRoutes } from "./users.route";

export const routes = Router()

routes.use('/user', userRoutes)