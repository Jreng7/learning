import express from 'express'

const PORT = 3333
const server = express()

server.use(express.json())

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})

