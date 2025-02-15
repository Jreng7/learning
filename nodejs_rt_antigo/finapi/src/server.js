const express = require('express')
const { config } = require('dotenv')
const { v4: uuidv4 } = require('uuid')

config()

const port = process.env.PORT || 3000
const host = "127.0.0.1"

const server = express()
server.use(express.json())


const customers = []


server.post('/account', (request, response) => {
  
  const { cpf, name } = request.body

  const customerAlreadyExists = customers.some( itemPercorrido => { itemPercorrido.cpf === cpf } ) 

  const id = uuidv4()

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  })


})

server.listen(port, host, (err) => {
  if(err){
    console.error(err)
  }
  console.log(`Server running at port ${port}`)
})

