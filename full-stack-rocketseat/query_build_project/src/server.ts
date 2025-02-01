import express, { Request, Response } from "express"
import { knex } from "./database/knex"


const server = express()
server.use(express.json())


server.post("/courses", async (request: Request, response: Response) => {

  const { name } = request.body

  await knex("courses").insert({ name })

  return response.status(201).json()
})


server.get("/courses", async (request: Request, response: Response) => {

  const courses = await knex("courses").select().orderBy("name")

  return response.json({ courses })
})


server.put("/courses/:id", async (request: Request, response: Response) => {

  const { id } = request.params
  const { name } = request.body

  await knex("courses").update({ name }).where({ id })

  return response.json()
})


server.delete("/courses/:id", async (request: Request, response: Response) => {

  const { id } = request.params

  await knex("courses").delete().where({ id })

  return response.status(204).json()

})


server.listen(3333, () => console.log(`Ok! Server is running on port 3333`))
