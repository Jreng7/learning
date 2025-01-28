
/*
  
  getAll => GET para listar vários registros.
  show => GET para exibir um registro específico.
  create => POST para criar um registro.
  update => PUT para atualizar um registro.
  remove => DELETE para deletar um registro.  */


import { Request, Response } from 'express'
import { AppError } from '../utils/AppError'
import { z } from 'zod'


export class ProductsController {


  getAll(request: Request, response: Response){

    const { page, limit } = request.query
    response.send(`As query params são "${page}" e "${limit}"`)

  }

  create(request: Request, response: Response){

    const bodySchema = z.object({

      name: z.string({ required_error: "Name is required" }).trim().min(4, { message: "Name must be 4 or more characteres"}),
      price: z.number({ required_error: "Price is required" }).positive({ message: "Price must be positive" }).gte(500)

    })


    const { name, price } = bodySchema.parse(request.body)


    // if ( !name || !price ) {
    //   throw new AppError("Nome e Preço do produto são obrigatórios!")
    // }

    // throw new Error("Erro de exemplo")
    //throw new AppError("Erro de exemplo", 401)

    response.status(201).json({produto: name, preco: price, user_id: request.user_id})
    
  }


}

