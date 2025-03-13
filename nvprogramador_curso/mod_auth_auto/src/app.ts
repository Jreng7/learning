import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet'; 

class App {
  
  public app: Express;

  constructor() {
    this.app = express(); // Aqui você cria a instância do Express
    this.middleware(); // Aplica os middlewares
  }

  middleware() {
    this.app.use(cors()); // Adiciona o middleware de CORS
    this.app.use(helmet()); // Adiciona o middleware de Helmet
    this.app.use(express.json()); // Adiciona o middleware para lidar com JSON
  }
}


export default new App().app; 
