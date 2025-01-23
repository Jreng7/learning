import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'

const taskService = new TaskService()

class TaskController {

  // Metodo GET - Listar as Tasks completadas.
  get(req: Request, res: Response){

    const { status } = req.query

    if ( status && (status === "in_progress" || status === "completed")) {

      const result = taskService.getService(status)
      res.status(200).json(result)

    } else {
      res.status(401).send('<error>Corrigir o parâmetro enviado!</error>')
    }

  }

  // Metodo GET por ID - Lista apenas uma tarefa.
  getById(req: Request, res: Response){

    const { id_task } = req.params

    if(id_task) {

    } else {
      res.json({error: "Invalid id task"}).status(401)
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


export default TaskController;