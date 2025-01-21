import { IAluno } from "../models/aluno";

export class AlunoService {

  getAll(): IAluno[] {
    return [{name: "Joaquim", email: "joaq@gmail.com", phone: "351", password: "1587", cpf: "1587"}]
  }

  getId(id: string): IAluno {
    return {name: "Joaquim", email: "joaq@gmail.com", phone: "351", password: "1587", cpf: "1587"}
  }

  add(data: IAluno): IAluno {
    return data
  }

  update(id: string){

  }

  delete(id: string){

  }

}