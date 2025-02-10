import { z } from 'zod'
import { knex } from '@/database/knex'
import { AppError } from '@/utils/AppError'
import { Request, Response, NextFunction } from 'express'


export class TablesController {

  async index(request: Request, response: Response, next: NextFunction){

    try {
      const tables = await knex<TableRepository>("tables").select().orderBy("table_number")

      return response.json(tables)

    } catch (error) {
      next(error)
    }

  }

  async create(request: Request, response: Response, next: NextFunction){

    try {
      const tables = await knex("tables").select()
      
    } catch (error) {
      next(error)
    }

  }

  async update(request: Request, response: Response, next: NextFunction){

    try {
      const tables = await knex("tables").select()
      
    } catch (error) {
      next(error)
    }

  }

  async remove(request: Request, response: Response, next: NextFunction){

    try {
      const tables = await knex("tables").select()
      
    } catch (error) {
      next(error)
    }

  }

}