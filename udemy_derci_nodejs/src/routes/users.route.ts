
import express from 'express';
import { UsersController } from '../controllers/users.controller' 


export const userRoutes = express.Router();


userRoutes.get("/users", UsersController.getAllUsers)
userRoutes.get("/users/:id", UsersController.getUserById)
userRoutes.post("/users", UsersController.insertUser)
userRoutes.put("/users/:id", UsersController.updateUserById)
userRoutes.delete("/users/:id", UsersController.deleteUserById)


