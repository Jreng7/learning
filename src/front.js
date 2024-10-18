import { Readable } from 'node:stream'

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

fetch('localhost:8081', {
  method: 'POST',
  body: new One(),
  duplex: 'half'
})