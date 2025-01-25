import { ticketRouter } from '../routes/index.js'

export function routeHandler(req, res) {

  const route = ticketRouter.find((route) => {
    return route.method === req.method && route.url === req.url
  })

  if ( route ) {
    return route.controller({ req, res })
  }

  return res.writeHead(404, { 'Content-Type': 'text/plain' }).end("Sorry, cant find that")

}

