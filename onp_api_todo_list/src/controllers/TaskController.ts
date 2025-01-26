import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'
import { getSchema, getByIdSchema, getAddSchema } from '../schemas/TaskSchema'

const taskService = new TaskService()

class TaskController {

  // Metodo GET - Listar as Tasks completadas.
  async get(req: Request, res: Response){

    const { status } = req.query

    try {
      
      await getSchema.validate(req.query)

      const result = taskService.getService(status as string)
      res.status(200).json(result)
      
    } catch (error) {
      res.status(401).json({ error: error })

    }

  }

  // Metodo GET por ID - Lista apenas uma tarefa.
  async getById(req: Request, res: Response){
 
    const { id_task } = req.params;

    try {

      await getByIdSchema.validate(req.params)

      const result = taskService.getById(id_task)
      res.json(result) 

    } catch (error){

      res.status(401).json({error: "Sorry, cant find that, case id_task is invalid."})
    }
    
  }

  // Metodo POST - Inserir Tasks
  async add(req: Request, res: Response) {

    
    try {

      await getAddSchema.validate()

      const result = taskService.addService(req.body)
      res.status(201).json(result)

    } catch (error) {

      res.status(401).json({ error: error })
      
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

  deleteService(req: Request, res: Response){

    const { id_task } = req.params

    if ( id_task ) {
      
      const result = taskService.delete(id_task)
      
      res.json(result)

    } else {
      res.json({error: "id task not found"})
    }

  }

} 


export default TaskController;