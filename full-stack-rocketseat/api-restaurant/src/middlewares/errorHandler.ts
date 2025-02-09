import { ZodError } from 'zod'
import { AppError } from '@/utils/AppError'
import { Request, Response, NextFunction } from 'express'


export function errorHandler(error: any, request: Request, response: Response, _: NextFunction){
  
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  if (error instanceof ZodError) {
    
  }


  return response.status(500).json({ message: error.message })
}