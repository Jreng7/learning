
import { Request, Response } from 'express'


export class AlunoController {
  
  //  Buscar todos os alunos.
  getAllStudents(req: Request, res: Response){
    return res.json({message: "Alunos listados com sucesso pela classe!"})
  }

  //  Buscar um aluno por ID.
  getStudentById(req: Request, res: Response){
    return res.json({message: "Busca por um aluno"})
  }

  //  Adicionar um aluno.
  addStudent(req: Request, res: Response){
    return res.json({message: "Aluno adicionado com sucesso!"})
  }

  //  Editar um aluno.
  updateStudent(req: Request, res: Response){
    return res.json({message: "Atualizar um aluno"})
  }

  //  Excluir um aluno.
  deleteStudent(req: Request, res: Response){
    return res.json({message: "Aluno deletado com sucesso!"})
  }


}
