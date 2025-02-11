const { createServer } = require('node:http')
const host = '127.0.0.1'
const port = 3000

const server = createServer((request, response) => {

  response
    .statusCode(200)
    .setHeader('Content-Type', 'text/plain')
    .end('Meu primeiro script')

})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)
})