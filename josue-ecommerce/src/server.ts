
import express from "express";
import { initializeApp } from "firebase-admin/app";
import { routes } from "./routes/router";

initializeApp();
const server = express();

server.use(express.json())
server.use(routes)

server.listen(3000, () => {
  console.log("Server is running on port 3000");
})
