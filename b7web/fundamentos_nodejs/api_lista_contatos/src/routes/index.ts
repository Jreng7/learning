import { Router, Request, Response } from 'express'

const router = Router()

router.post('/contato', (request: Request, response: Response) => {

    const { name } = request.body

    if (!name || name.length < 2) {
      return response.json({ error: 'O nome precisa ter pelo menos 2 caracteres.'})
    }

    return response.status(201).json({ contato: name })
})


export default router 