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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
let users = [];
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    res.json(user);
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    if (name) {
        user.name = name;
    }
    if (email) {
        user.email = email;
    }
    res.json(user);
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newUsers = users.filter((user) => user.id !== Number(id));
    if (newUsers.length === users.length) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    users = newUsers;
    res.status(204).end();
});
exports.deleteUser = deleteUser;
