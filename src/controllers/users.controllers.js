let users = []

export const getUsers = async (req, res) => {
  res.json(users)
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const user = users.find((user) => user.id === Number(id))
  if (!user) {
    return res.status(404).json({ error: "User not found" })
  }

  res.json(user)
}

export const createUser = async (req, res) => {
  const { name, email } = req.body
  const newUser = { id: users.length + 1, name, email }
  users.push(newUser)

  res.status(201).json(newUser)
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  const user = users.find((user) => user.id === Number(id))
  if (!user) {
    return res.status(404).json({ error: "User not found" })
  }

  if (name) {
    user.name = name
  }

  if (email) {
    user.email = email
  }

  res.json(user)
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  const newUsers = users.filter((user) => user.id !== Number(id))
  if (newUsers.length === users.length) {
    return res.status(404).json({ error: "User not found" })
  }
  users = newUsers

  res.status(204).end()
}
