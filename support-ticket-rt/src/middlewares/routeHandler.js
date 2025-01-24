import { routes } from "../routes";

export function routeHandler(req, res) {

  const route = routes.find((route) => {
    return route.method === req.method && route.url === req.url
  })

  if ( route ) {
    return route.controller(req, res)
  }

  return res.writeHead(404).end("Sorry, cant find that")

}

