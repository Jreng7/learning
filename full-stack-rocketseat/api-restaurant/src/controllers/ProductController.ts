import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/utils/AppError'

export class ProductController {

  async index(request: Request, response: Response, next: NextFunction){

    try {

      throw new AppError("erro de teste", 401)
      return response.json({ message: "Ok"})

    } catch (error) {

      next(error)
    }

  }
}