const express = require('express')
const { config } = require('dotenv')

config()
const port = process.env.PORT || 3000
const host = "127.0.0.1"
const server =  express()


server.listen(port, host, () => {

})