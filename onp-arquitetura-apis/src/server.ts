import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from '../src/routes/routes';

dotenv.config()
const server = express();

server.use(cors())
server.use(express.json())
server.use(router)
server.use((req: Request, res: Response) => {
  res.status(404).json({message: "Sorry, cant find that"})
})

server.listen(process.env.PORT)