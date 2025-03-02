import { Request, Response } from "express"



export class LoginController {
  async create(request: Request, response: Response) {

    const { username, password } = request.body

    const fakeUser = {
      id: 1,
      username: 'Miguel',
      password: '123457'
    }

    if( username !== fakeUser.username || password !== fakeUser.password ) {
      
    }

    return response.json({ message: 'Okay' })
  }
}


