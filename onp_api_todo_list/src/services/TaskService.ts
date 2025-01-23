import { Itask } from '../models/Task'
import { TaskRepository } from '../repositories/TaskRepository';

const taskRepository = new TaskRepository()

export class TaskService {

  getService(dado: string){

    const result = taskRepository.getRepository()

    result.map((objRepository) => {
      if ( objRepository.status === dado ) {
        
      } 
    })

  }

  addService(dados: Itask): Itask {
   return taskRepository.addRepository(dados)
  }

}     