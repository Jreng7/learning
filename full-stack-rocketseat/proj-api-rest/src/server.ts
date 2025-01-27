import express from 'express'
import { myMiddleware } from './middlewares/myMiddleware'


const server = express()
server.use(express.json())


// server.use(myMiddleware)  Middleware Global (Aplica para todas as rotas abaixo dele.)
server.get('/products', (request, response) => {
  const { page, limit } = request.query
  response.send(`As query params são "${page}" e "${limit}"`)
})

server.post('/products', myMiddleware ,(request, response) => {
  const { name, price } = request.body
  response.status(201).json({produto: name, preco: price, user_id: request.user_id})
})


const PORT = 3333
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))