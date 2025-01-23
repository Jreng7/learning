import { Itask } from "../models/Task";

export class TaskRepository {

  private arrayDeObjetoTask: Itask[];

  constructor(){
    this.arrayDeObjetoTask = []
  }

  addRepository(dados: Itask): Itask {
    this.arrayDeObjetoTask.push(dados)
    return dados
  }

}