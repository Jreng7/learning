const express = require('express')
const { config } = require('dotenv')

config()

const port = process.env.PORT || 3000
const host = "127.0.0.1"

const server =  express()
server.use(express.json())


server.listen(port, host, (err) => {
  if(err){
    console.error(err)
  }
  console.log(`Server running at port ${port}`)
})

