import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import { routes } from "./routes"

const app = express()

app.use(express.json())
app.use(routes)
app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
  response.status(500).json({ message: error.message })
})

export default app;