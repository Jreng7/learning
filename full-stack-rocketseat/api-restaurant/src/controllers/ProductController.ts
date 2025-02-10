import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/utils/AppError'
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

  async update(request: Request, response: Response, next: NextFunction){

    try {

      const id = z.string()
        .transform( (value) => Number(value) )
        .refine((value) => !isNaN(value), {message: "id must be a number"})
        .parse(request.params.id)

      const bodyShema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0)
      })

      const { name, price } = bodyShema.parse(request.body)

      const product = await knex<ProductRepository>("products").select().where({ id }).first()

      await knex<ProductRepository>("products").update({ name, price, updated_at: knex.fn.now()}).where({ id })

      return response.json()

    } catch (error) {
      next(error)
    }
  }

  async delete(request: Request, response: Response, next: NextFunction){

    try {
      
      const id = z.string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), {message: "id must be a number"})
        .parse(request.params.id)

      const product = await knex<ProductRepository>("products").select().where({ id }).first()

      if (!product) {
        throw new AppError("Product not found", 401)
      }
      
      await knex<ProductRepository>("products").delete().where({ id })

      return response.status(204).json()

    } catch (error) {
      next(error)
    }

  }



}


