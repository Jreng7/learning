import { create } from "../controllers/tickets/create.js"
import { index } from "../controllers/tickets/index.js"

export const ticket = [
  
  {
    method: "POST",
    url: "/ticket",
    controller: create,
  },

  {
    method: "GET",
    url: "/tickets",
    controller: index,
  },

  
]