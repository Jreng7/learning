export class AppError {

  message: string;
  statusCode: number;

  constructor(mensagem: string, CodigoStatus: number){
    this.message = mensagem;
    this.statusCode = CodigoStatus
  }

}