import express, { Request, Response } from 'express';

const router = express.Router();


type User = [{id: number, name: string, email: string}]
let id = 0;
const users: User[] = []


router.get("/users", (req: Request, res: Response) => {
  res.send(users);
})