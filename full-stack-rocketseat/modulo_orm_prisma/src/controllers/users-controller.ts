import { Request, Response } from "express"
import { prisma } from "@/database/prisma"

export class UsersController {

  async index(request: Request, response: Response) {
    return response.json()
  }

  async create(request: Request, response: Response) {
    return response.status(201).json()
  }
  async show(request: Request, response: Response) {
    return response.json()
  }
  
}
