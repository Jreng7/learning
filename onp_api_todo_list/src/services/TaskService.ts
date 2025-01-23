import { Itask } from '../models/Task'
import { TaskRepository } from '../repositories/TaskRepository';

const taskRepository = new TaskRepository()

export class TaskService {

  getService(statusQuery: string){

    const result = taskRepository.getRepository()
    const taskStatus: Itask[] = []

    result.map((objRepository) => {
      if ( objRepository.status === statusQuery ) {
        taskStatus.push(objRepository)
      } 
    })

    return taskStatus

  }

  getById(id: string) {
    const result = taskRepository.getById()
  }

  addService(dados: Itask): Itask {
   return taskRepository.addRepository(dados)
  }
}     



