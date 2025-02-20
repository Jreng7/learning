import { Request, Response } from "express"

export class QuestionsController {

  async index(request: Request, response: Response) {
    return response.json()
  }

  async create(request: Request, response: Response) {
    return response.status(201).json()
  }

  async update(request: Request, response: Response) {
    return response.json()
  }

  async remove(request: Request, response: Response) {
    return response.json()
  }
  
}

