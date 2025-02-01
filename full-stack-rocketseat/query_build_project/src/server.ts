import express, { Request, Response } from "express"
import { knex } from "./database/knex"

const server = express()
server.use(express.json())

server.post("/courses", async (request: Request, response: Response) => {

  const { name } = request.body

  await knex("courses").insert({ name })

  response.status(201).json()
})

server.listen(3333, () => console.log(`Ok! Server is running on port 3333`))
