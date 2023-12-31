"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.get("/", users_controllers_1.getUsers);
usersRouter.get("/:id", users_controllers_1.getUser);
usersRouter.post("/", users_controllers_1.createUser);
usersRouter.put("/:id", users_controllers_1.updateUser);
usersRouter.delete("/:id", users_controllers_1.deleteUser);
