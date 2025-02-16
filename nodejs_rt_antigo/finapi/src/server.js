import express from 'express'
const { config } = require('dotenv')
const { v4: uuidv4 } = require('uuid')
const helmet = require('helmet')
const path = require('node:path')

config()
const port = process.env.PORT || 3000
const host = "127.0.0.1"

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, '../public')))
server.use(helmet())


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

  const custumer = customers.find( cliente.cpf === cpf )

  return json(customer.statement)

})


server.listen(port, host, (err) => {
  if(err){
    console.error(err)
  }
  console.log(`Server running at port ${port}`)
})

