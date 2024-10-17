
// process.stdout.write('Digite Algo: ')
// process.stdin.on('data', (info) => {
//   process.stdout.write(`Aqui está o que você digitou ${info}`)
// })

import { Readable, Writable, Transform } from 'node:stream'

class One extends Readable {

  num = 1

  _read() {

    const i = this.num++

    setTimeout(() => {
      if (i > 7) {
        this.push(null)
      } else {
        const buf = Buffer.from(i.toString())
        this.push(buf)
      }
    }, 300)
  }
}

class OneNegative extends Transform {
  _transform(chunk, encoding, callback) {
    const data = Number(chunk.toString()) * -1
    callback(null, data.toString())
  }
}

class OneTen extends Writable {
  _write(chunk, encoding, callback) {
    const dado = Number(chunk.toString())
    console.log(dado * 10)
    callback()
  }
}

new One()
  .pipe(new OneNegative())
  .pipe(new OneTen())
