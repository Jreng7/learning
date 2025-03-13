import server from "./app";
import { config } from 'dotenv'
config()

const port = process.env.PORT

server.listen(port, () => {
  console.log(`Server running at http://localhost:{port}`)
})