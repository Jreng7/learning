import { Request, Response } from "express"
import { AppError } from "@/utils/AppError"
import {} from '@/configs/auth'
import { sign } from 'jsonwebtoken'


export class LoginController {

  async create(request: Request, response: Response) {

    const { username, password } = request.body

    const fakeUser = {
      id: 1,
      username: 'Miguel',
      password: '123457'
    }

    if( username !== fakeUser.username || password !== fakeUser.password ) {
      throw new AppError('Usuário e/ou Senha incorreta.', 401)
    }

    return response.json({ message: `Usuário ${username} logado com sucesso.` })
  }

}


