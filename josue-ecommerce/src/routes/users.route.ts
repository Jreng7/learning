
import { Router } from 'express';
import { UsersController } from '../controllers/users.controller' 

export const userRoutes = Router()

userRoutes.get("/", UsersController.getAllUsers)
userRoutes.get("/:id", UsersController.getUserById)
userRoutes.post("/", UsersController.insertUser)
userRoutes.put("/:id", UsersController.updateUserById)
userRoutes.delete("/:id", UsersController.deleteUserById)


