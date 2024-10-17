import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {

  const { method, url } = req

  if(method === 'POST' && url === '/user') {

    users.push({
      id: 1,
      name: 'joaquim',
      email: 'joaquimsilva@gmail.com'
    })

    return res.writeHead(201).end('User created sucessfull!')

  } else if(method === 'GET' && url === '/list'){
    return res
      .setHeader('Content-type', 'aplication/json')
      .end(JSON.stringify(users))
  }

  return res.writeHead(404).end('Not Found')

})

server.listen(3334)