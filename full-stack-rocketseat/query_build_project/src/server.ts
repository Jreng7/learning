import express, { Request, Response } from "express"

const server = express()
server.use(express.json())

server.post("/courses", async (request: Request, response: Response) => {
  response.json()
})

server.listen(3333, () => console.log(`Ok! Server is running on port 3333`))
