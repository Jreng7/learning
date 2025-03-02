import { Request, Response } from "express"

export class LoginController {
  async create(request: Request, response: Response) {
    return response.json({ message: process.env.USER_NAME })
  }
}


