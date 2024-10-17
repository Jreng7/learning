import http from 'node:stream'
import { Readable } from 'node:stream'

class OneNegative extends Transform {
  _transform(chunk, encoding, callback) {
    const data = Number(chunk.toString()) * -1
    callback(null, data.toString())
  }
}

const server = http.createServer((req, res) => {

  return 

}).listen(3335)