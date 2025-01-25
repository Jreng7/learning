import { ticketRouter } from '../routes/index.js'
import { Database } from '../database/database.js'

const database = new Database()

export function routeHandler(req, res) {

  const route = ticketRouter.find((route) => {
    return route.method === req.method && route.url.test(req.url)
  })

  if ( route ) {
    const routeParams = req.url.match(route.url)
    return route.controller({ req, res, database })
  }

  return res.writeHead(404, { 'Content-Type': 'text/plain' }).end("Sorry, cant find that")

}

