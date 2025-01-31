import express, { Request, Response } from "express"

const server = express()
server.use(express.json())

server.get("/", async (request: Request, response: Response) => {
  response.json({ message: "Olá" })
})

server.listen(3333, () => console.log(`Server is running on port 3333`))
