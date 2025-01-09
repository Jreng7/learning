
import express from "express";
import { initializeApp } from "firebase-admin/app";
import { routes } from "./routes/routes";

initializeApp();
const server= express();

routes(server);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
})
