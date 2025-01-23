import { Router, Request, Response } from 'express'
import TaskController from '../controllers/TaskController'

const taskController = new TaskController()

export const router = Router()

router.get('/tasks', taskController.get)
router.get('/task/:id_task', taskController.getById)
router.post('/task', taskController.add)
router.put('/task/:id_task', taskController.update)
router.delete('task/:id_task')