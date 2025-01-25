import { randomUUID } from 'node:crypto'


export function create({ req, res, database }){

  const { equipment, description, user_name } = req.body

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
    updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
  }

  database.insert("tickets", ticket)

  return res.writeHead(201).end(JSON.stringify(ticket))
}

