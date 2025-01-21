import { Request, Response } from 'express'
import { AlunoService } from '../services/AlunoService'

const alunoService = new AlunoService()

export class AlunoController {
  
  //  Buscar todos os alunos.
  getAllStudents(req: Request, res: Response){
    const result = alunoService.getAll()
  }

  //  Buscar um aluno por ID.
  getStudentById(req: Request, res: Response){
    const result = alunoService.getId(req.params.id)
  }

  //  Adicionar um aluno.
  addStudent(req: Request, res: Response){
    const result = alunoService.add(req.body)
  }

  //  Editar um aluno.
  updateStudent(req: Request, res: Response){
    const result = alunoService.update(req.params.id)
  }

  //  Excluir um aluno.
  deleteStudent(req: Request, res: Response){
    const result = alunoService.delete(req.params.id)
  }

}
