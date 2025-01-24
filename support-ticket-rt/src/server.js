import http from 'node:http'
import { routeHandler } from '../src/middlewares/routeHandler.js'
import { jsonHandler } from './middlewares/jsonHandler.js'


async function handlerServer(req, res) {

  await jsonHandler(req, res)
  routeHandler(req, res)

}


http.createServer(handlerServer).listen(3034)