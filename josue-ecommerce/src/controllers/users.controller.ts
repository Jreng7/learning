import { Request, Response } from 'express';
import { getFirestore } from 'firebase-admin/firestore'


type User = {
  id: number;
  nome: string;
  email: string;
}

export class UsersController {


  // metodo get - Pegar todos os usuários
  static async getAllUsers(request: Request, response: Response){

    const usuarios = await getFirestore().collection("users").get()

    return response.json(usuarios)

  }


  // metodo get - Pegar usuário pelo Id
  static async getUserById(req: Request, res: Response){

    let { id } = req.params

    const doc = await getFirestore().collection("users").doc(id).get()

    let user = { id: doc.id, ...doc.data() }
    res.send(user)

  }


  // metodo post - inserir usuaŕios.
  static async insertUser(req: Request, res: Response) {

    let user = req.body
    const userSave = await getFirestore().collection("users").add(user)

    res.status(201).json({ message: `Usuário ${userSave.id} criado com sucesso!`})
  }


  // metodo put - atualizar usuário
  static updateUserById(req: Request, res: Response){
    let { id } = req.params
    let user = req.body as User;
   
    getFirestore().collection("users").doc(id).set({
      nome: user.nome,
      email: user.email
    })

    res.send({message: "Usuário atualizado com sucesso!"})
  }
  

  // Metodo delete
  static async deleteUserById(req: Request, res: Response){

    let { id } = req.params
    
    await getFirestore().collection("users").doc(id).delete()
    res.status(204).end()
  }
  
}
