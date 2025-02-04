import { createServer }from 'node:http'

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html'}),
//   res.write('<h1>TreinaWeb</h1>'),
//   res.end()
// })

// server.listen(3333, () => {
//   console.log('Server is running on port 3333')
// })


const server = createServer((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'text/html'})
  
  let url = req.url

  if( url  === '/sobre' ) {

    res.write('<h1>TreinaWeb Sobre</h1>')
    res.end()

  } else if (url === '/contato') {

    res.write('<h1>TreinaWeb Contato</h1>')
    res.end()

  } else {

    res.write('<h1>Treina Web, nenhuma rota encontrada, veja mais em </h1><a href="/sobre">Sobre</a> ou <a href="/contato">Contato</a>')
    res.end()

  }

})

server.listen(3333, () => {
  console.log('Server is running on port 3333')
})
