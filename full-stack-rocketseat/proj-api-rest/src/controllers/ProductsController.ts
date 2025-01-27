
/*
  
  getAll => GET para listar vários registros.
  show => GET para exibir um registro específico.
  create => POST para criar um registro.
  update => PUT para atualizar um registro.
  remove => DELETE para deletar um registro.  */


import { Request, Response } from 'express'


export class ProductsController {


  getAll(request: Request, response: Response){

    const { page, limit } = request.query
    response.send(`As query params são "${page}" e "${limit}"`)

  }

  create(request: Request, response: Response){

    const { name, price } = request.body


    throw new Error("Erro de exemplo")


    response.status(201).json({produto: name, preco: price, user_id: request.user_id})
    
  }


}

