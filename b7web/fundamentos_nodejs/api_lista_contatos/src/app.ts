import express, { Request, Response } from 'express'
import helmet from 'helmet'

const app = express()

// 1. Middlewares comuns primeiro (ex: helmet, cors, etc.)
app.use(helmet())
app.use(express.json())
app.use('/', router)


export default app;