import { Router } from 'express'
import { userRoutes } from "./users.router";

export const routes = Router()

routes.use('/users', userRoutes)