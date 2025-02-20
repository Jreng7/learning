import { Request, Response, NextFunction } from "express"

export class UsersController {

  async index(request: Request, response: Response) {
    return response.json()
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      throw new Error("Aqui fica o error.message")
      return response.status(201).json({ message: "ok"})
    } catch (error) {
      next(error)
    }
  }

  async show(request: Request, response: Response) {
    return response.json()
  }
  
}

