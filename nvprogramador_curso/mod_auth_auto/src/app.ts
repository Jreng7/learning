import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet'; 
import { routes } from './router/routes';

class App {
  
  public app: Express;

  constructor() {
    this.app = express(); // Aqui você cria a instância do Express
    this.middleware(); // Aplica os middlewares
    this.router()
  }

  middleware() {
    this.app.use(cors()); // Adiciona o middleware de CORS
    this.app.use(helmet()); // Adiciona o middleware de Helmet
    this.app.use(express.json()); // Adiciona o middleware para lidar com JSON
  }

  router(){
    this.app.use(routes)
  }
}


export default new App().app; 
