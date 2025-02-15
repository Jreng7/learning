const express = require('express')
const { config } = require('dotenv')

config()

const port = process.env.PORT || 3000
const host = "127.0.0.1"

const server = express()
server.use(express.json())


const customers = []


server.post('/account', (request, response) => {
  
  const { cpf, name } = request.body

  const customerAlreadyExists = customers.some((item) => {
    item.cpf === cpf
    
  }) 
})

server.listen(port, host, (err) => {
  if(err){
    console.error(err)
  }
  console.log(`Server running at port ${port}`)
})

