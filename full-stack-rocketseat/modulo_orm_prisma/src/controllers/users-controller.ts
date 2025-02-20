import { Request, Response } from "express"
import { prisma } from "@/database/prisma"


export class UsersController {

  async getAllUsers(request: Request, response: Response) {
    const users = await prisma.user.findMany()
    return response.status(200).json(users)
  }

  async create(request: Request, response: Response) {

    const { name, email } = request.body

    await prisma.user.create({ data: { name, email } })

    return response.status(201).json({ message: "User successfully created"})
    
  }

  async showUnique(request: Request, response: Response) {

    const { id } = request.params

    const uniqueUser = await prisma.user.findUnique({ where: {id} })

    return response.json(uniqueUser)
  }
  
}
