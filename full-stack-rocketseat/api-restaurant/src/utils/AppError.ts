
export class AppError {

  message: string;
  statusCode: number;


  constructor(mensagem: string, statusCodigo: number) {
    this.message = mensagem;
    this.statusCode = statusCodigo;
  }

}