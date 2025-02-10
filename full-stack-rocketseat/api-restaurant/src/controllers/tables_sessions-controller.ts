import { Request, Response, NextFunction } from 'express'
import { knex } from '@/database/knex'
import { number, z } from 'zod'

export class TablesSessionsController {
  async create(request: Request, response: Response, next: NextFunction){
    try {
      const bodySchema = z.object({
        table_id: number()
      })
      
      const { table_id } = bodySchema.parse(request.body)

      const session = await knex<TablesSessionsRepository>("tables_sessions").select()

      await knex<TablesSessionsRepository>("tables_sessions").insert({
        table_id,
        opened_at: knex.fn.now()
      })

      return response.status(201).json()
    } catch (error) {
      next(error)
    }
  }
}
