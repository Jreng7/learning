import dotenv from 'dotenv'; 
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet'; 

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json())