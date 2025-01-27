import express from 'express'


const server = express()
server.use(express.json())


server.get('/products', (request, response) => {
  const { page, limit } = request.query
  response.send(`As query params são "${page}" e "${limit}"`)
})

server.post('/products', (request, response) => {
  const { name, price } = request.body
  response.status(201).json({produto: name, preco: price})
})


const PORT = 3333
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))