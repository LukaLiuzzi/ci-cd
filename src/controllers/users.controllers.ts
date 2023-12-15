import { Request, Response } from "express"
interface User {
  id: number
  name: string
  email: string
}

let users: User[] = []

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  res.json(users)
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const user = users.find((user) => user.id === Number(id))
  if (!user) {
    res.status(404).json({ error: "User not found" })
    return
  }

  res.json(user)
}

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email } = req.body
  const newUser: User = { id: users.length + 1, name, email }
  users.push(newUser)

  res.status(201).json(newUser)
}

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params
  const { name, email } = req.body
  const user = users.find((user) => user.id === Number(id))
  if (!user) {
    res.status(404).json({ error: "User not found" })
    return
  }

  if (name) {
    user.name = name
  }

  if (email) {
    user.email = email
  }

  res.json(user)
}

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params
  const newUsers = users.filter((user) => user.id !== Number(id))
  if (newUsers.length === users.length) {
    res.status(404).json({ error: "User not found" })
    return
  }
  users = newUsers

  res.status(204).end()
}
