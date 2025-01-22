import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'

const taskService = new TaskService()

export class TaskController {

  add(req: Request, res: Response) {
    const { id, description, data, status } = req.body

    if(id && description && data && status) {
      const result = taskService.addService(req.body)
    } else {
      res.status(401).json({error: "Sorry, cant find that!"})
    }
  }
} 
