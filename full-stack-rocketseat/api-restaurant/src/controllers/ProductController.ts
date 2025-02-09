import { Request, Response, NextFunction } from 'express'
import { knex } from '@/database/knex'
import { z } from 'zod'


export class ProductController {

  async getAll(request: Request, response: Response, next: NextFunction){

    try {

      const { name } = request.query

      const products = await knex<ProductRepository>("products").select().whereLike("name", `%${name ?? ""}%`)

      return response.json({ products })

    } catch (error) {

      next(error)
    }

  }

  async create(request: Request, response: Response, next: NextFunction){
    
    try {
      
      const bodySchema = z.object({
        name: z.string({ required_error: "name is required!"}).trim().min(5),
        price: z.number().gt(0, { message: "value must be greater than 0" })
        
      })
      
      const { name, price } = bodySchema.parse(request.body)

      await knex<ProductRepository>("products").insert({ name, price })

      return response.status(201).json({ name, price })
      
    } catch (error) {
      next(error)
    }

  }
}


