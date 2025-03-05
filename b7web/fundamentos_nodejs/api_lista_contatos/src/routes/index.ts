import { Router, Request, Response } from 'express'
import { readFile } from 'fs/promises'

export const router = Router()


const dataSource = './data/list.txt'


router.post('/contato', async (request: Request, response: Response) => {

    const { name } = request.body

    if (!name || name.length < 2) {
      return response.json({ error: 'O nome precisa ter pelo menos 2 caracteres.'})
    }

    let list: string[] = []
    try {
      const data = await readFile(dataSource, { encoding: 'utf8' })
    } catch (error) {
      
    }


    return response.status(201).json({name})
})