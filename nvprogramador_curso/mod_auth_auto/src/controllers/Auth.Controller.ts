import { Request, Response } from 'express'
import { executeAuthSchema } from '../schemas/Auth.Schema'

class AuthController {

  async execute(req: Request, res: Response) {
    try {
      const validatedData = executeAuthSchema.parse(req.body);

      if (!validatedData) {
        return res.status(400).json({ error: "Erro email ou senha" });
      }
      
      return res.status(201).json({ message: "Dados validados com sucesso!" });

    } catch (err: any) {
      res.status(400).json({ error: err.message })
    }
  }

  async refreshtoken(req: Request, res: Response) {
    
  }

}


export default new AuthController()