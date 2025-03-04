import express, { Request, Response, NextFunction } from 'express'
import helmet from 'helmet'

const app = express()

// 1. Middlewares comuns primeiro (ex: helmet, cors, etc.)
app.use(helmet())
app.use(express.json())


// 2. Rotas (ex: app.get, app.post...)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});


export default app;