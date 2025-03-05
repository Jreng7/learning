import { Router, Request, Response } from 'express'

export const router = Router()

router.post('/contato', (request: Request, response: Response) => {

    const { name } = request.body

    if (!name || name.length < 2) {
      return response.json({ error: 'O nome precisa ter pelo menos 2 caracteres.'})
    }

    let list: string[] = []

    return response.status(201).json({name})
})