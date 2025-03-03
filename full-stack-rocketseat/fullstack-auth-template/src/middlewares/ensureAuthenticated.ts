import { AppError } from '@/utils/AppError'
import { Request, Response, NextFunction } from 'express'

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token JWT não encontado!", 401)
  }

  const [, token] = authHeader.split(' ')

  return next()
}