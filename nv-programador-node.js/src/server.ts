import express, { Request, Response } from 'express'

const server = express()

server.get("/", (req: Request, res: Response) => {
  
})

server.listen(3000)