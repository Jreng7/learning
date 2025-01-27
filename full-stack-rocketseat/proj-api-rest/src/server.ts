import express from 'express'

const server = express()


server.get('/products', (request, response) => {
  const { page, limit } = request.query
  response.send(`As query params são "${page}" e "${limit}"`)
})


server.post('/products', (request, response) => {
  
})




const PORT = 3333
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))