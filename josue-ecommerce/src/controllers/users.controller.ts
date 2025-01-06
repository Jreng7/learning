import { Request, Response } from 'express';
import { getFirestore } from 'firebase-admin/firestore'

type User = {
  id: number;
  nome: string;
  email: string
}

let id = 0;
const users: User[] = []

export class UsersController {

  // metodo get - Pegar todos os usuários
  static getAllUsers(req: Request, res: Response){
    res.send(users)
  }

  // metodo get - Pegar usuário pelo Id
  static getUserById(req: Request, res: Response){
    let userId = Number(req.params.id)
    let user = users.find((usuario: User) => usuario.id === userId)
    res.send(user)
  }

  // metodo post - inserir usuaŕios.
  static insertUser(req: Request, res: Response) {

    let user = req.body
    getFirestore().collection("users").add(user)

    res.send({message: "Usuário criado com sucesso!"})
  }

  // metodo put - atualizar usuário
  static updateUserById(req: Request, res: Response){
    let userId = Number(req.params.id)
    let user = req.body
    let indexOf = users.findIndex((usuarioUpdate: User) => usuarioUpdate.id === userId)
    users[indexOf].nome = user.nome
    user[indexOf].email = user.email
    res.send({message: "Usuário atualizado com sucesso!"})
  }

  // Metodo delete
  static deleteUserById(req: Request, res: Response){
    let userId = Number(req.params.id)
    let findUser = users.findIndex((user: User) => user.id === userId)
    users.splice(findUser, 1)
    res.send({message: "Usuário deletado com sucesso."})
  }

}

