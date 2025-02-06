import fs from 'node:fs'


// fs.writeFile('meu_arquivo.txt', 'TreinaWeb', (err) => {
  
//   if(err) {
//     return console.error('Erro ao escrever o arquivo', err)
//   }
  
//   console.log('Arquivo escrito com sucesso!')
  
// })


// console.time('Time Assíncrono')

// let counter = 0


// for(let i = 0; i < 20; i++){

//   fs.readFile('meu_arquivo.txt', (err, data) => {

//     if(err) {
//       return console.error(err)
//     }
//     counter++
//     console.log('O código do meu_arquivo.txt é: ' + data.toString())

//     if(counter === 20) {
//       console.timeEnd('Time Assíncrono')
//     }

//   })

// } // Time Assíncrono: 8.899ms