import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'

const taskController = new TaskController()

export const router = Router()

router.get('/tasks', taskController.get)
router.get('/task/:id_task')
router.post('/task', taskController.add)
router.put('/task/:id_task')
router.delete('task/:id_task')