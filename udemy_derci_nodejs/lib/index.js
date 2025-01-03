"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Bem-vindo ao meu site! ok 2");
});
let id = 0;
const users = [];
app.get("/users", (req, res) => {
    res.send(users);
});
app.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = users.find(item => item.id === userId);
    res.send(user);
});
app.post("/users", (req, res) => {
    let user = req.body;
    user.id = ++id;
    users.push(user);
    res.send({ message: "usuário criado com sucesso." });
});
app.put("/users/:id", (req, res) => {
});
app.delete("/users/:id", (req, res) => {
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map