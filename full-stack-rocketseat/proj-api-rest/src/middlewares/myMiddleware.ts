import { Request, Response, NextFunction } from 'express'

export function myMiddleware(request: Request, response: Response, next: NextFunction){
  
  request.user_id = '1257960'
  
  console.log("Passou pelo middleware usando o next()")
  
  return next()
}