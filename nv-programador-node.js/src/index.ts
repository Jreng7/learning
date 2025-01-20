import express, { request, Request, Response } from 'express';

const server = express();

server.get("/", (req: Request, res: Response) => {
  return res.json({message: "Testando servidor."})
})

server.get("/criancas/:id", (req: Request, res: Response) => {
  const id_pijamas = req.params.id
  return res.json({id: id_pijamas, message: "Pijama de bolinhas azuis."})
})

server.listen(3000);