import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'
import { getSchema, getByIdSchema, addSchema, updateSchema, allSchemaParams, deleteSchema } from '../schemas/TaskSchema'

const taskService = new TaskService()

class TaskController {

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

  async add(req: Request, res: Response) {

    
    try {

      await addSchema.validate(req.body)
      const result = taskService.addService(req.body)
      res.status(201).json(result)

    } catch (error) {

      res.status(401).json({ error: error })
    }

  }

  async update(req: Request, res: Response){
    
    try {

      const { id_task } = req.params
      
      await updateSchema.validate(req.body)
      await allSchemaParams.validate(id_task)
      
      const resultado = taskService.updateService(req.body, id_task)
  
      if ( Object.keys(resultado).length > 0 ) {
        res.json(resultado)
      } else {
        res.status(404).json({error: "Task not found"})
      }
      
    } catch (error) {

      res.status(401).json({error: error})
    }
  
  }

  async deleteService(req: Request, res: Response){

    const { id_task } = req.params
    
    await deleteSchema.validate(req.params)
    await allSchemaParams.validate(id_task)

    try {
      
      const result = taskService.delete(id_task)
      res.status(204).json(result)

    } catch (error) {
      
      res.status(401).json({error: error})
      
    }
  }

} 


export default TaskController;