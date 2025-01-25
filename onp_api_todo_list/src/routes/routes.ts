import { Router, Request, Response, NextFunction } from 'express'
import TaskController from '../controllers/TaskController'

const taskController = new TaskController()

const middlewares = (req: Request, res: Response, next: NextFunction) => {

  if ( req.headers.authorization ) {
    // validação.
    next()
  } 

  return res.status(404).send("Not found route")
}

export const router = Router()

router.get('/tasks', middlewares, taskController.get)
router.get('/task/:id_task', taskController.getById)
router.post('/task', taskController.add)
router.put('/task/:id_task', taskController.update)
router.delete('/task/:id_task', taskController.deleteService)