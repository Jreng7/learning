import { create } from "../controllers/tickets/create.js"

export const ticket = [
  
  {
    method: "POST",
    url: "/ticket",
    controller: create,
  }

  
]