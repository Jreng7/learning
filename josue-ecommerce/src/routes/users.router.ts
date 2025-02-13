
import { Router } from 'express';
import { UsersController } from '../controllers/users.controller' 

const userRoutes = Router()
const usersController = new UsersController()

userRoutes.get("/", usersController.getAllUsers)
userRoutes.get("/:id", usersController.getUserById)
userRoutes.post("/", usersController.insertUser)
userRoutes.put("/:id", usersController.updateUserById)
userRoutes.delete("/:id", usersController.deleteUserById)


export { userRoutes }