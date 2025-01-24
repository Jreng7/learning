import { NextFunction, Router, Request, Response } from 'express'
import { AlunoController } from '../controllers/AlunoController'

export const router = Router()

const alunoController = new AlunoController();


const authMiddleware = ( req: Request, res: Response, next: NextFunction ) => {

  // Executar as verificações necessárias 

  if ( req.headers.authorization ) {
    // validar o token para identificar a existência do usuário
    next();
  } else {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }

}


router.get("/aluno", authMiddleware, alunoController.getAllStudents) //  Buscar todos os alunos.
router.get("/aluno/:id", alunoController.getStudentById) //  Buscar um aluno por ID.
router.post("/aluno", alunoController.addStudent)  //  Adicionar um aluno.
router.put("/aluno/:id",alunoController.updateStudent)  //  Editar um aluno.
router.delete("/aluno/:id", alunoController.deleteStudent) //  Excluir um aluno.