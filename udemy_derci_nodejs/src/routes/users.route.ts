import express, { Request, Response } from 'express';
import { UsersController } from '../controllers/users.controller' 

export const userRoutes = express.Router();



userRoutes.get("/users", UsersController.getAllUsers)


// Metodo get pega usuário por 
userRoutes.get("/users/:id", UsersController.getUserById)

// Metodo post
userRoutes.post("/users", (req: Request, res: Response) => {
  let user = req.body
  user.id = ++id
  users.push(user)
  res.send({message: "Usuário criado com sucesso!"})
})

// Metodo put
userRoutes.put("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id)
  let user= req.body
  let indexOf = users.findIndex((usuarioPercorrido: User) => usuarioPercorrido.id === userId)
  users[indexOf].nome = user.nome
  users[indexOf].email = user.email
  res.send({message: "Usuário atualizado com sucesso."})
})

// delete
userRoutes.delete("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id)
  let user = req.body
  users.splice(user, userId)
  res.send({message: "Usuário deletado com sucesso."})
})


