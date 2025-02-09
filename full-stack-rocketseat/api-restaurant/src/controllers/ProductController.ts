import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'


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
      
      

      return response.status(201).json({ name, price })
      
    } catch (error) {
      next(error)
    }

  }
}


