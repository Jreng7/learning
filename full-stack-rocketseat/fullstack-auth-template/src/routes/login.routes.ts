import { Router } from "express"
import { LoginController } from "@/controllers/login-controller"

export const loginRoutes = Router()
const loginController = new LoginController()

loginRoutes.post("/", loginController.create)

