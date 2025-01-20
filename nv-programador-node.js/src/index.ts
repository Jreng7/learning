import express, { Request, Response } from 'express';

const server = express();

server.get("/", (req: Request, res: Response) => {
  return res.json({message: "Testando servidor."})
})

server.listen(3000);