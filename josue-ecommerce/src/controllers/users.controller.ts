import { Request, Response } from 'express';
import { getFirestore } from 'firebase-admin/firestore'

type User = {
  id: number;
  nome: string;
  email: string;
}

let users: User[] = []

export class UsersController {

  // metodo get - Pegar todos os usuários
  static getAllUsers(res: Response){
    res.send(users)
  }

  // metodo get - Pegar usuário pelo Id
  static getUserById(req: Request, res: Response){
    let userId = Number(req.params.id)
    let user = users.find((usuario: User) => usuario.id === userId)
    res.send(user)
  }

  // metodo post - inserir usuaŕios.
  static async insertUser(req: Request, res: Response) {

    let user = req.body
    const userSave = await getFirestore().collection("users").add(user)

    res.send({
      message: `Usuário ${userSave.id} criado com sucesso!`
    })
  }


  // metodo put - atualizar usuário
  static updateUserById(req: Request, res: Response){
    let userId = Number(req.params.id)
    let user = req.body
    let indexOf = users.findIndex((itemPercorrido: User) => itemPercorrido.id === userId)
    users[indexOf].nome = user.nome
    users[indexOf].email = user.email
    res.send({message: "Usuário atualizado com sucesso!"})
  }
  
  // Metodo delete
  static deleteUserById(req: Request, res: Response){
    let userId = Number(req.params.id)
    let user = users.findIndex((elementoArray: User) => elementoArray.id === userId)
    users.splice(user, 1)
    res.send({message: "Usuário deletado com sucesso."})
  }
  
}
