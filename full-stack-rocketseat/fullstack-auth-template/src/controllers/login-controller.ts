import { Request, Response } from "express"
import { AppError } from "@/utils/AppError"
import auth from '@/configs/auth'
import { sign } from 'jsonwebtoken'


export class LoginController {

  async create(request: Request, response: Response) {

    const { username, password } = request.body

    const fakeUser = {
      id: 1,
      username: 'miguel',
      password: '123457'
    }

    if( username !== fakeUser.username || password !== fakeUser.password ) {
      throw new AppError('Usuário e/ou Senha incorreta.', 401)
    }

    const { secret, expiresIn } = auth.jwt

    const token = sign({}, secret, {
      expiresIn: undefined,
      subject: String(fakeUser.id),
    })

    return response.json({ message: token })
  }

}


