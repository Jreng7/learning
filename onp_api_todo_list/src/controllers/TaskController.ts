import { Request, Response } from 'express'
import { ITask } from '../models/Task'

export class TaskController {

  addController(req: Request, res: Response){
    const { id, description, data, status } = req.body
  }
} 