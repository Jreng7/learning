import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'

const taskService = new TaskService()

export class TaskController {

  // Metodo GET - Listar as Tasks completadas.
  get(req: Request, res: Response){

    const { status } = req.query

    if ( status && (status === "in_progress" || status === "completed")) {

      taskService.getService(status)

    } else {
      res.status(401).send('<error>Corrigir o parâmetro enviado!</error>')
    }


  }


  // Metodo POST - Inserir Tasks
  add(req: Request, res: Response) {

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
