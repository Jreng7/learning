import { Request, Response } from "express"
import { prisma } from "@/database/prisma"


export class UsersController {

  async index(request: Request, response: Response) {
    return response.json()
  }

  async create(request: Request, response: Response) {

    const { name, email } = request.body

    await prisma.user.create({ data: { name, email } })

    return response.status(201).json({ message: "User successfully created"})
    
  }

  async show(request: Request, response: Response) {
    return response.json()
  }
  
}
