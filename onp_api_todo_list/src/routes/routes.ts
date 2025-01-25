import { Router, Request, Response, NextFunction } from 'express'
import TaskController from '../controllers/TaskController'

const taskController = new TaskController()

export const router = Router()


const middlewares = (req: Request, res: Response, next: NextFunction) => {
  

  if ( req.headers.authorization ) {
    // validação.
    next()
  } else {
    res.status(404).send('Sorry, cant find that')
  }

}

router.get('/tasks', taskController.get)
router.get('/task/:id_task', taskController.getById)
router.post('/task', taskController.add)
router.put('/task/:id_task', taskController.update)
router.delete('/task/:id_task', taskController.deleteService)