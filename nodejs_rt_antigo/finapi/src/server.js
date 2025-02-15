const express = require('express')
const { config } = require('dotenv')
const { v4: uuidv4 } = require('uuid')

config()

const port = process.env.PORT || 3000
const host = "127.0.0.1"

const server = express()
server.use(express.json())


// banco de dados 
const customers = []


// Rota POST - Create User
server.post('/account', (request, response) => {
  
  const { cpf, name } = request.body

  const customerAlreadyExists = customers.some( itemPercorrido => { itemPercorrido.cpf === cpf } ) 

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists!"})
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  })

})


// Metodo GET - Pegar dados bancários de um cliente
server.get('/statement/:cpf', (request, response) => {

  const { cpf } = request.params

  const costumer = customers.find(client => client.cpf === cpf)

})


server.listen(port, host, (err) => {
  if(err){
    console.error(err)
  }
  console.log(`Server running at port ${port}`)
})

