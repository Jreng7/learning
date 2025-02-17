import express from 'express'
import { config } from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import helmet from 'helmet'


config()
const port = process.env.PORT || 3000
const host = "127.0.0.1"

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(helmet())


const customers = []


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

  return response.status(201).send()

})


server.get('/statement', (request, response) => {

  const { cpf } = request.headers

  const customer = customers.find(cliente => cliente.cpf === cpf )

  if (!customer) {  
    return response.status(400).json({ error: "Customer not found"})
  }

  return response.json(customer.statement)

})


server.listen(port, host, (err) => {
  if(err){
    console.error(err)
  }
  console.log(`Server running at port ${port}`)
})

