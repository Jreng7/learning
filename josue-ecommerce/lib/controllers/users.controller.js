"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
let id = 0;
const users = [];
class UsersController {
    // metodo get - Pegar todos os usuários
    static getAllUsers(req, res) {
        res.send(users);
    }
    // metodo get - Pegar usuário pelo Id
    static getUserById(req, res) {
        let userId = Number(req.params.id);
        let user = users.find((usuario) => usuario.id === userId);
        res.send(user);
    }
    // metodo post - inserir usuaŕios.
    static insertUser(req, res) {
        let user = req.body;
        user.id = ++id;
        users.push(user);
        res.send({ message: "Usuário criado com sucesso!" });
    }
    // metodo put - atualizar usuário
    static updateUserById(req, res) {
        let userId = Number(req.params.id);
        let user = req.body;
        let indexOf = users.findIndex((usuarioUpdate) => usuarioUpdate.id === userId);
        users[indexOf].nome = user.nome;
        user[indexOf].email = user.email;
        res.send({ message: "Usuário atualizado com sucesso!" });
    }
    // Metodo delete
    static deleteUserById(req, res) {
        let userId = Number(req.params.id);
        let findUser = users.findIndex((user) => user.id === userId);
        users.splice(findUser, 1);
        res.send({ message: "Usuário deletado com sucesso." });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map