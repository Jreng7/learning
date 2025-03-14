import { Router } from 'express';
import AuthController from '../controllers/Auth.Controller';

const routes = Router()

routes.get('/', (req, res) => {
  return res.status(200).json({ message: "server ok"})
})
routes.post('/auth', AuthController.execute)
routes.post('/auth/refreshtoken', AuthController.refreshtoken)


export { routes }