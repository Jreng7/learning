import http from 'node:http'

const server = http.createServer(async(req, res) => {

  const buffers = []

  for await (const data of req) {
    buffers.push(data)
  }

  const contentBody = Buffer.concat(buffers).toString()

  console.log(contentBody)

  return res.end(contentBody)
  
})

server.listen(8081)