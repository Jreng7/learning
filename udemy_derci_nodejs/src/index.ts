import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo ao meu site! ok 2");
})


type User = {id: number, name: string, email: string};
let id = 0;
const users: User[] = [];


app.get("/users", (req: Request, res: Response) => {
  res.send(users);
})

app.get("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let user = users.find(item => item.id === userId)
  res.send(user);
})

app.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  user.id = ++id;
  users.push(user)
  res.send({ message: "usuário criado com sucesso." })
})

app.put("/users/:id", (req: Request, res: Response) => {

  let userId = Number(req.params.id);
  let user = req.body;
  let indexOf = users.findIndex((_user: User) => _user.id === userId);
  users[indexOf].name = user.name;
  users[indexOf].email = user.email;

  res.send({messagem: "Usuário alterado com sucesso."})

})

app.delete("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let indexOf = users.findIndex((_user: User) => _user.id === userId);
  users.splice(indexOf, 1);
  res.send({message: "Usuário excluído com sucesso."})
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})

