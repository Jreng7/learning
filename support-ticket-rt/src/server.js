import http from 'node:http'  // Nativo

import { routeHandler } from '../src/middlewares/routeHandler.js'  // Código interno
import { jsonHandler } from './middlewares/jsonHandler.js' // Código interno


async function handlerServer(req, res) {

  await jsonHandler(req, res)
  routeHandler(req, res)

}


http.createServer(handlerServer).listen(3034)


