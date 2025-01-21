import { Request, Response, Router } from 'express'


export const router = Router()


 // Metodo GET
router.get("/criancas/:id", (req: Request, res: Response) => {
  const id_pijamas = req.params.id;
  const { tamanho, cor } = req.query

  return res.json({id_pijamas, tamanho, cor})
})

  // Metodo POST
router.post('/painel/pijama', (req: Request, res: Response) => {
  const { nome, tamanho, cor, preco, quantidade_estoque } = req.body;

  return res.json({nome, tamanho, cor, preco, quantidade_estoque})
})

  // Metodo PUT
router.put('/painel/pijama', (req: Request, res: Response) => {
  const { nome, tamanho, cor, preco, quantidade_estoque } = req.body;
  
  return res.json({nome, tamanho, cor, preco, quantidade_estoque})
})