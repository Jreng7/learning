import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/utils/AppError'

export class ProductController {

  async getAll(request: Request, response: Response, next: NextFunction){

    try {
      return response.json({ message: "Ok"})

    } catch (error) {

      next(error)
    }

  }

  async create(request: Request, response: Response, next: NextFunction){

    try {
      
      const { name, price } = request.body

      return response.status(201).json({ message: name, price })
      
    } catch (error) {
      next(error)
    }

  }
}


