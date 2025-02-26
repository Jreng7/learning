import express from 'express'
import os from 'node:os' // OS mostra as informações do Sistema Operacional do Usuário.

const app = express()
const port = 3333


app.get('/', (req, res) => {
  res.end(`Tipo do sistema: ${os.type()} Versao do Sistema: ${os.release()} Qual e a plataforma: ${os.platform()}`)
})

app.listen(port, () => {
  console.log('Server listening on port 3333 Dockerfile, but host is port 8080')
})