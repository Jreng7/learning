import fs from 'node:fs'

console.time('Assíncrono')


let counter = 0

for(let i = 0; i < 500; i++){

  fs.readFile('meu_arquivo.txt', (err, data) => {

    if(err) { 
      return console.error(err)
    }
    counter++
    console.log('Assíncrono' + data.toString())

    if(counter === 500) {
      console.timeEnd('Termino do Assíncrono')
    }

  })

}