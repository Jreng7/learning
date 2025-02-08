import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/utils/AppError'


export function errorHandler(error: any, request: Request, response: Response, _: NextFunction){
  if(error instanceof AppError){
    return response.status(error.statusCode).json({ message: error.message })
  }
}