import { Request, Response } from "express"
import { prisma } from "@/database/prisma"

export default class QuestionsController {

  static async index(request: Request, response: Response) {
    return response.json()
  }

  static async create(request: Request, response: Response) {

    const { title, content, user_id } = request.body

    await prisma.question.create({
      data: { title, content, userId: user_id }
    })

    return response.status(201).json()
  }

  static async update(request: Request, response: Response) {
    return response.json()
  }

  static async remove(request: Request, response: Response) {
    return response.json()
  }

}

