import { Request, Response } from "express"
import { prisma } from "@/database/prisma"

export default class QuestionsController {

  static async index(request: Request, response: Response) {

    const questions = await prisma.question.findMany({
      where: {
        title: {
          contains: request.query.title?.toString().trim(),
          mode: "insensitive"
        }
      },
      orderBy: {
        title: "asc"
      }
    })
    return response.json(questions)
    
  }

  static async create(request: Request, response: Response) {

    const { title, content, user_id } = request.body // Recebi a requisição do body 
    const conteudo = await prisma.question.create({data: { title, content, userId: user_id }}) // requisição tratada

    return response.status(201).json(conteudo)
  }

  static async update(request: Request, response: Response) {

    const { id } = request.params
    const { title, content } = request.body

    await prisma.question.update({ data: { title, content }, where: { id }})

    return response.status(201).json({ message: "Questão atualizada com sucesso."})
  }

  static async remove(request: Request, response: Response) {
    return response.json()
  }

}

