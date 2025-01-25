import { randomUUID } from 'node:crypto'

export function create({ req, res }){

  const { equipment, description, user_name } = req.body

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name
  }

  return res.end(JSON.stringify(ticket))
}

