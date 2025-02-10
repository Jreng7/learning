import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/utils/AppError'
import { z } from 'zod'
import { knex } from '@/database/knex'

export class TablesController {

  async index(request: Request, response: Response, next: NextFunction){
    
  }

  async create(request: Request, response: Response, next: NextFunction){
    try {
      
    } catch (error) {
      
    }
  }

  async update(request: Request, response: Response, next: NextFunction){
    
  }

  async remove(request: Request, response: Response, next: NextFunction){
    
  }

}