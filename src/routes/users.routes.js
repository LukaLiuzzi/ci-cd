import { Router } from "express"
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.controllers.js"

const usersRouter = Router()

usersRouter.get("/", getUsers)

usersRouter.get("/:id", getUser)

usersRouter.post("/", createUser)

usersRouter.put("/:id", updateUser)

usersRouter.delete("/:id", deleteUser)

export { usersRouter }
