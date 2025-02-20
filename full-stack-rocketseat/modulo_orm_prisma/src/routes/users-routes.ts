import { Router } from "express"
import { UsersController } from "@/controllers/users-controller"

export const usersRoutes = Router()
const usersController = new UsersController()

usersRoutes.get("/", usersController.index)
usersRoutes.post("/", usersController.create)
usersRoutes.get("/:id", usersController.show)

