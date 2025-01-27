
export class AppError {

  message: string
  statusCode: number

  constructor(mensagem: string, codigoStatus: number = 400){

    this.message = mensagem
    this.statusCode = codigoStatus
    
  }


}