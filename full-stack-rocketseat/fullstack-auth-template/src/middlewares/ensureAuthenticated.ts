import { AppError } from '@/utils/AppError'
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import authConfig from '@/configs/auth'


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token JWT não encontado!", 401)
  }

  const [, token] = authHeader.split(' ')

  const { sub } = verify(token, authConfig.jwt.secret)

  return next()
}