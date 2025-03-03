import { Request, Response } from "express"

export class ProductsController {
  async index(request: Request, response: Response) {}

  async create(request: Request, response: Response) {
    return response.status(201).json({ message: "Created"})
  }
}


