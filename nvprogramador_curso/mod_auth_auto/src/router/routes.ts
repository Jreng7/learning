import { Router } from 'express';
import AuthController from '../controllers/Auth.Controller';

const routes = Router()

routes.post('/auth', AuthController.execute)
routes.post('/auth/refreshtoken', AuthController.refreshtoken)


export { routes }