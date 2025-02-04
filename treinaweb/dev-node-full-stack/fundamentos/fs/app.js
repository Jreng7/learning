import fs from 'node:fs'

// fs.writeFile('arquivo.txt', 'conteúdo', (err) => {
//   if(err){
//     console.error(err)
//   }

//   console.log('Arquivo criado com sucesso!')
// })

// fs.appendFile('arquivo.txt', 'adicionado', (err) => {
  
//   if(err) {
//     console.error(err)
//   }

//   console.log('Conteúdo adicionado')

// })

fs.readFile('arquivo.txt', (err, data) => {
  
  if( err ){
    console.error(err)
  }

  console.log(data.toString())

})