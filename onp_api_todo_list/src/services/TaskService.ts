import { Itask } from '../models/Task'
import { TaskRepository } from '../repositories/TaskRepository';

const taskRepository = new TaskRepository()

export class TaskService {

  addService(dados: Itask): Itask {
   return taskRepository.addRepository(dados)
  }

} 