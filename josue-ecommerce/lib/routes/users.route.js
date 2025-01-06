"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
exports.userRoutes = express_1.default.Router();
exports.userRoutes.get("/users", users_controller_1.UsersController.getAllUsers);
exports.userRoutes.get("/users/:id", users_controller_1.UsersController.getUserById);
exports.userRoutes.post("/users", users_controller_1.UsersController.insertUser);
exports.userRoutes.put("/users/:id", users_controller_1.UsersController.updateUserById);
exports.userRoutes.delete("/users/:id", users_controller_1.UsersController.deleteUserById);
//# sourceMappingURL=users.route.js.map