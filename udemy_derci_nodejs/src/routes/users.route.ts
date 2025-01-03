import express, { Request, Response } from 'express';

const router = express.Router();


type User = {
  
  id: number;
  name: string; 
  email: string;

}

let id = 0;
const users: User[] = []



router.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo ao meu site! ok 2");
})


// METODO GET
router.get("/users", (req: Request, res: Response) => {
  res.send(users);
})


// METODO GET
router.get("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let user = users.find(item => item.id === userId)
  res.send(user);
})


// METODO POST
router.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  user.id = ++id;
  users.push(user)
  res.send({ message: "usuário criado com sucesso." })
})

// METODO PUT
router.put("/users/:id", (req: Request, res: Response) => {

  let userId = Number(req.params.id);
  let user = req.body;
  let indexOf = users.findIndex((user: User) => user.id === userId);
  users[indexOf].name = user.nameBody;
  users[indexOf].email = user.emailBody;

  res.send({messagem: "Usuário alterado com sucesso."})

})

// METODO DELETE
router.delete("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let indexOf = users.findIndex((user: User) => user.id === userId);
  users.splice(indexOf, 1);
  res.send({message: "Usuário excluído com sucesso."})
})