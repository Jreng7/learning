import { Request, Response } from "express"

export default class QuestionsController {

  static async index(request: Request, response: Response) {
    return response.json()
  }

  static async create(request: Request, response: Response) {
    return response.status(201).json()
  }

  static async update(request: Request, response: Response) {
    return response.json()
  }

  static async remove(request: Request, response: Response) {
    return response.json()
  }

}

