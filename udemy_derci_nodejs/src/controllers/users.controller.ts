import { Request, Response } from 'express';

type User = {
  id: number;
  nome: string;
  email: string
}

let id = 0;
const users: User[] = []

export class UsersController {

  static getAllUsers(req: Request, res: Response){
    res.send(users)
  }

  static getUserById(req: Request, res: Response){
    let userId = Number(req.params.id)
    let user = users.find((usuario: User) => usuario.id === userId)
    res.send(user)
  
}
