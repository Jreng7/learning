import { Request, Response } from "express"

export class UsersController {

  async index(request: Request, response: Response) {
    return response.json()
  }

  async create(request: Request, response: Response) {

    throw new Error("Aqui fica o error.message, porém, agora com a biblioteca 'express-async-errors'")
    return response.status(201).json({ message: "ok"})

  }

  async show(request: Request, response: Response) {
    return response.json()
  }
  
}

