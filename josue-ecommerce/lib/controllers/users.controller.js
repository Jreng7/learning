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
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield (0, firestore_1.getFirestore)().collection("users").get();
            const usersdoc = snapshot.docs.map(refDoc => {
                return Object.assign({ id: refDoc.id }, refDoc.data());
            });
            res.send(usersdoc);
        });
    }
    // metodo get - Pegar usuário pelo Id
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            const doc = yield (0, firestore_1.getFirestore)().collection("users").doc(userId).get();
            let user = Object.assign({ id: doc.id }, doc.data());
            res.send(user);
        });
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
        let userId = req.params.id;
        let user = req.body;
        (0, firestore_1.getFirestore)().collection("users").doc(userId).set({
            nome: user.nome,
            email: user.email
        });
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