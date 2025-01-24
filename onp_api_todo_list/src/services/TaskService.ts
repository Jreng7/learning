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

  getById(id: string): Itask | {} {
    const result = taskRepository.getRepository()

    let task = {}

    result.map((objeto) => {
      if ( objeto.id === id ) {
        task = objeto
      }
    })

    return task
  }

  
  addService(dados: Itask): Itask {
    return taskRepository.addRepository(dados)
  }

  
  updateFuncaoByIndex( id: string ): number {

    const resultado = taskRepository.getRepository()
    let position: number = -1;

    resultado.map((objetoIndex, index) => { 
      if( objetoIndex.id === id ) {
        position = index
      }
    })

    return position

  }


  updateService(bodyReq: Itask, id_task: string) {

    const posicaoIndex = this.updateFuncaoByIndex(id_task)

    if ( posicaoIndex !== -1 ) {
      return taskRepository.updateRepository(bodyReq, posicaoIndex)
    } else {
      return {}
    }
    
  }

  delete(bodyReq: Itask, id_task: string) {
    const posicaoIndex = this.updateFuncaoByIndex(id_task)
  }



}       



