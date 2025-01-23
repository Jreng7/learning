import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'

const taskService = new TaskService()

export class TaskController {



  addController(req: Request, res: Response) {

    const { id, description, data, status } = req.body

    if (id && description && data && status) {

      if ( status === "completed" || status === "in_progress" ) {
        const result = taskService.addService(req.body)
        res.json(result).status(201)
      } else {
        res.json({error: "Status incorrect"})
      }

    } else {
      res.status(401).json({error: "Sorry, cant find that result"})
    }

  }




} 
