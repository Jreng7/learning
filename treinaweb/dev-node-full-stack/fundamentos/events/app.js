import EmmitEvents from 'node:events'

// const emitter = new EmmitEvents()

// emitter.on('evento', () => {
//   console.log('Evento acionado')
// })

// emitter.emit('evento')

class Cachorro extends EmmitEvents {
  latir(){
    console.log("Latindo...")
  }
}

let rex = new Cachorro()

//rex.on('pessoa_na_porta', rex.latir) Executa muitas vezes
rex.once('pessoa_na_porta', rex.latir) // executa apenas uma vez.
rex.emit('pessoa_na_porta')
rex.emit('pessoa_na_porta')
rex.emit('pessoa_na_porta')
rex.emit('pessoa_na_porta')
rex.removeListener('pessoa_na_porta', rex.latir)
rex.emit('pessoa_na_porta')
rex.emit('pessoa_na_porta')
