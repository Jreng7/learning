"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const firestore_1 = require("firebase-admin/firestore");
let users = [];
class UsersController {
    // metodo get - Pegar todos os usuários
    static getAllUsers(res) {
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
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            const userSave = yield (0, firestore_1.getFirestore)().collection("users").add(user);
            res.send({
                message: `Usuário ${userSave.id} criado com sucesso!`
            });
        });
    }
    // metodo put - atualizar usuário
    static updateUserById(req, res) {
        let userId = Number(req.params.id);
        let user = req.body;
        let indexOf = users.findIndex((itemPercorrido) => itemPercorrido.id === userId);
        users[indexOf].nome = user.nome;
        users[indexOf].email = user.email;
        res.send({ message: "Usuário atualizado com sucesso!" });
    }
    // Metodo delete
    static deleteUserById(req, res) {
        let userId = Number(req.params.id);
        let user = users.findIndex((elementoArray) => elementoArray.id === userId);
        users.splice(user, 1);
        res.send({ message: "Usuário deletado com sucesso." });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map