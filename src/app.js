import express from "express"
import { usersRouter } from "./routes/users.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", usersRouter)

export { app }
