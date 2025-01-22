import { Itask } from "../models/Task";

export class TaskRepository {

  private tasks: Itask[];

  constructor(){
    this.tasks = []
  }

  addRepository(dados: Itask){
    this.tasks.push(dados)
  }

}