import request from "supertest"
import { app } from "../src/app.js"

describe("USERS API", () => {
  beforeAll(async () => {
    await request(app).post("/users").send({
      name: "Luka",
      email: "luka@gmail.com",
    })
  })

  test("GET /users should return 200", async () => {
    const response = await request(app).get("/users").expect(200)
  })

  test("GET /users should return array of objects with name, email and id", async () => {
    const response = await request(app).get("/users")
    const users = response.body

    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          email: expect.any(String),
          id: expect.any(Number),
        }),
      ])
    )
  })

  test("GET /users/:id should return 200", async () => {
    const response = await request(app).get("/users/1").expect(200)
  })

  test("GET /users/:id should return object with name, email and id", async () => {
    const response = await request(app).get("/users/1")
    const user = response.body

    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        email: expect.any(String),
        id: expect.any(Number),
      })
    )
  })

  test("GET /users/:id should return 404 if user does not exist", async () => {
    const response = await request(app).get("/users/1032").expect(404)
  })

  test("POST /users should return 201", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "alvaro",
        email: "alvaro@gmail.com",
      })
      .expect(201)
  })

  test("POST /users should return object with name, email and id", async () => {
    const response = await request(app).post("/users").send({
      name: "alvaro",
      email: "alvaro@gmail.com",
    })

    const user = response.body

    expect(user).toEqual(
      expect.objectContaining({
        name: "alvaro",
        email: "alvaro@gmail.com",
        id: expect.any(Number),
      })
    )
  })

  test("PUT /users/:id should return 200", async () => {
    const response = await request(app)
      .put("/users/1")
      .send({
        name: "lukita",
        email: "luka@gmail.com",
      })
      .expect(200)
  })

  test("PUT /users/:id should return update user object", async () => {
    const response = await request(app).put("/users/1").send({
      name: "lukita",
      email: "luka@gmail.com",
    })
    const user = response.body

    expect(user).toEqual(
      expect.objectContaining({
        name: "lukita",
        email: "luka@gmail.com",
        id: expect.any(Number),
      })
    )
  })

  test("DELETE /users/:id should return 204", async () => {
    const response = await request(app).delete("/users/1").expect(204)
  })
})
