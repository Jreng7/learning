import http from 'node:http'

const users = []

const server = http.createServer(async(req, res) => {

  const { method, url } = req

  const buffers = [] // Banco de dados.

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const body = JSON.parse(Buffer.concat(buffers).toString())
  // Inserindo os dados que foram armazenados no banco de dados (buffers) 
  // OBS: Armazenados em memória. E colocados no BODY 

  if(method === 'POST' && url === '/user') {

    const { name, email } = req.body

    users.push({
      id: 1,
      name,
      email
    })

    return res.writeHead(201).end('User created sucessfull!')

  } else if(method === 'GET' && url === '/list'){
    return res
      .setHeader('Content-type', 'aplication/json')
      .end(JSON.stringify(contentBody))
  }

  return res.writeHead(404).end('Not Found')

})

server.listen(3334)