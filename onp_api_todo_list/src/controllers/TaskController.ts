import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'

const taskService = new TaskService()

class TaskController {

  // Metodo GET - Listar as Tasks completadas.
  get(req: Request, res: Response){

    const { status } = req.query

    if ( status === "in_progress" || status === "completed" ) {

      const result = taskService.getService(status)
      res.status(200).json(result)

    } else {
      res.status(401).send('<error>Corrigir o parâmetro enviado!</error>')
    }

  }

  // Metodo GET por ID - Lista apenas uma tarefa.
  getById(req: Request, res: Response){

    const { id_task } = req.params;

    if ( id_task ) {
      
      const result = taskService.getById(id_task)
      res.json(result) 

    } else {
      res.status(401).json({error: "Sorry, cant find that, case id_task is invalid."})
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

  // Metodo PUT - Alterar Tasks
  update(req: Request, res: Response){

    const { id, description, data, status } = req.body
    const { id_task } = req.params

    if ( id && description && data && status && id_task ) {

      if( status === "in_progress" || status === "completed") {

        const resultado = taskService.updateService(req.body, id_task)

        if ( Object.keys(resultado).length > 0 ) {
          res.json(resultado)
        } else {
          res.status(404).json({error: "Task not found"})
        }

      } else {
        res.json({error: "Invalid status"})
      }

    } else {
      res.status(401).json({error: "Não encontrado"})
    }

  }

  delete(req: Request, res: Response){

    const { id_task } = req.body

    if ( id_task ) {
      taskService.delete()
    } else {
      res.json({error: "id task not found"})
    }

  }

} 


export default TaskController;