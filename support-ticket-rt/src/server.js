import http from 'node:http'

import { jsonHandler } from './middlewares/jsonHandler.js'

async function handlerServer(req, res) {
  await jsonHandler(req, res)
}

http.createServer(handlerServer).listen(3034)