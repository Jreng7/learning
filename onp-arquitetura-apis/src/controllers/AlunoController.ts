import { Request, Response } from 'express'
import { AlunoService } from '../services/AlunoService'

const alunoService = new AlunoService()

export class AlunoController {
  
  getAllStudents(req: Request, res: Response){
    const result = alunoService.getAll()
    res.json(result)
  }

  getStudentById(req: Request, res: Response){
    const result = alunoService.getId(req.params.id)
  }


  addStudent(req: Request, res: Response){
    const result = alunoService.add(req.body)
    res.json(result)
  }


  updateStudent(req: Request, res: Response){
    const result = alunoService.update(req.params.id)
  }


  deleteStudent(req: Request, res: Response){
    const result = alunoService.delete(req.params.id)
  }

}
