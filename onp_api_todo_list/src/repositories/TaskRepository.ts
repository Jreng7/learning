import { Itask } from "../models/Task";

export class TaskRepository {

  private arrayDeObjetoTask: Itask[];

  constructor(){
    this.arrayDeObjetoTask = []
  }

  // Metodo GET - Todas as Tasks
  getRepository(): Itask[] {
    return this.arrayDeObjetoTask
  }


  // Metodo POST
  addRepository(dados: Itask): Itask {
    this.arrayDeObjetoTask.push(dados)
    return dados
  }

}