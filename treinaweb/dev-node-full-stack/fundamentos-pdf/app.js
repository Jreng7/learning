import * as http from 'node:http'
import * as fs from 'node:fs'
import * as pdf from 'html-pdf'



const server = http.createServer((req, res) => {

  let html = fs.readFileSync('./index.html', 'utf8')

  const options = {
    type: 'pdf',  
    format: 'A4',
    orientation: 'portrait'
  }

  pdf.create(html.toString(), options).toBuffer((err, buffer) => {

    if(err) {
      console.error("Erro ao criar o PDF:", err)
      res.writeHead(500, {'Content-Type': 'text/plain'})
      res.end()
    }

    res.writeHead(200, {'Content-Type': 'application/pdf'})
    res.end(buffer)

  })

})

server.listen(3000, () => {
  console.log('Servidor iniciado com sucesso!')
})