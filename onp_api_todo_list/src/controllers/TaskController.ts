import { Request, Response } from 'express'
import { ITask } from '../models/Task'

export class TaskController {

  add(req: Request, res: Response) {
    const { id, description, data, status } = req.body

    if(id && description && data && status) {
      const result = console.log("oi")
    } else {
      res.status(401).json({error: "Sorry, cant find that!"})
    }
  }
} 