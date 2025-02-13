import { Request, Response } from 'express';
import { getFirestore } from 'firebase-admin/firestore'


type User = {
  id: number;
  nome: string;
  email: string;
}

export class UsersController {


  // metodo get - Pegar todos os usuários
  async getAllUsers(req: Request, res: Response){
    const snapshot = await getFirestore().collection("users").get()
    const usersdoc = snapshot.docs.map(refDoc => {
      return {
        id: refDoc.id,
        ...refDoc.data()
      }
    });
    res.send(usersdoc)
  }


  // metodo get - Pegar usuário pelo Id
  async getUserById(req: Request, res: Response){
    let userId = req.params.id
    const doc = await getFirestore().collection("users").doc(userId).get()
    let user = {
      id: doc.id,
      ...doc.data()
    }
    res.send(user)
  }


  // metodo post - inserir usuaŕios.
  async insertUser(req: Request, res: Response) {

    let user = req.body
    const userSave = await getFirestore().collection("users").add(user)

    res.status(201).send({
      message: `Usuário ${userSave.id} criado com sucesso!`
    })
  }


  // metodo put - atualizar usuário
  updateUserById(req: Request, res: Response){
    let { id } = req.params
    let user = req.body as User;
   
    getFirestore().collection("users").doc(id).set({
      nome: user.nome,
      email: user.email
    })

    res.send({message: "Usuário atualizado com sucesso!"})
  }
  

  // Metodo delete
  async deleteUserById(req: Request, res: Response){

    let { id } = req.params
    
    await getFirestore().collection("users").doc(id).delete()
    res.status(204).end()
  }
  
}
