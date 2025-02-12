
import express from "express";
import { userRoutes } from "./users.route";


const routes = (app: express.Express) => {

  app.use(express.json())
  app.use(userRoutes)
  
}

export { routes }