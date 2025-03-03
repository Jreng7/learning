import { Request, Response, NextFunction } from 'express'

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

  const authHeader = request.headers.authorization

  console.log(authHeader)

  return next()
}