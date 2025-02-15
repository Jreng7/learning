import express, { Request, Response } from 'express';
import { router } from '../routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(express.urlencoded({extended: true}));
server.use(cors())
server.use(router);

server.use((req: Request, res: Response) => {
  res.status(404).json({error: "Route not found."})
})


server.listen(process.env.PORT);

