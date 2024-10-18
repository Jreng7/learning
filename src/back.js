import http from 'node:http'
import { Transform } from 'node:stream'

class OneNegative extends Transform {
  _transform(chunk, encoding, callback) {
    const info = Number(chunk.toString()) * -1

    console.log(info)

    callback(null, info.toString())
  }
}

const server = http.createServer((req, res) => {

  return req.pipe(new OneNegative()).pipe(res)

})

server.listen(8081)