import { createServer } from 'node:http'
import fs from 'node:fs'
import pdf from 'html-pdf'



const server = createServer((req, res) => {

  let html = fs.readFileSync('./index.html')

  const options = {
    type: 'pdf',
    format: 'A4',
    orientation: 'portrait'
  }


})
