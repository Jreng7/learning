import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo ao meu site! ok 2");
})

let id = 0;
const users: {id: number, nome: string, email: string}[] = [];

app.get("/users", (req: Request, res: Response) => {
  res.send(users);
})

app.get("/users/:id", (req: Request, res: Response) => {
  
})

app.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  user.id = ++id;
  users.push(user)
  res.send({ message: "usuário criado com sucesso." })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})

