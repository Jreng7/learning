import { Router } from 'express'
import { AlunoController } from '../controllers/AlunoController'

export const router = Router()

const alunoController = new AlunoController();


router.get("/aluno", alunoController.getAllStudents) //  Buscar todos os alunos.
router.get("/aluno/:id", alunoController.getStudentById) //  Buscar um aluno por ID.
router.post("/aluno", alunoController.addStudent)  //  Adicionar um aluno.
router.put("/aluno/:id",alunoController.updateStudent)  //  Editar um aluno.
router.delete("/aluno/:id", alunoController.deleteStudent) //  Excluir um aluno.