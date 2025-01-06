"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.userRoutes = express_1.default.Router();
let id = 0;
const users = [];
exports.userRoutes.get("/users", (req, res) => {
    res.send(users);
});
// Metodo get pega usuário
exports.userRoutes.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = users.find((usuario) => usuario.id === userId);
    res.send(user);
});
// Metodo post
exports.userRoutes.post("/users", (req, res) => {
    let user = req.body;
    user.id = ++id;
    users.push(user);
    res.send({ message: "Usuário criado com sucesso!" });
});
// Metodo put
exports.userRoutes.put("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = users.findIndex((usuarioPercorrido) => usuarioPercorrido.id === userId);
    users[indexOf].nome = user.nome;
    users[indexOf].email = user.email;
    res.send({ message: "Usuário atualizado com sucesso." });
});
// delete
exports.userRoutes.delete("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = req.body;
    users.splice(user, userId);
    res.send({ message: "Usuário deletado com sucesso." });
});
//# sourceMappingURL=users.route.js.map