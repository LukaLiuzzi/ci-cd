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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../src/app");
describe("USERS API", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.app).post("/users").send({
            name: "Luka",
            email: "luka@gmail.com",
        });
    }));
    test("GET /users should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).get("/users").expect(200);
    }));
    test("GET /users should return array of objects with name, email and id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).get("/users");
        const users = response.body;
        expect(users).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name: expect.any(String),
                email: expect.any(String),
                id: expect.any(Number),
            }),
        ]));
    }));
    test("GET /users/:id should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).get("/users/1").expect(200);
    }));
    test("GET /users/:id should return object with name, email and id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).get("/users/1");
        const user = response.body;
        expect(user).toEqual(expect.objectContaining({
            name: expect.any(String),
            email: expect.any(String),
            id: expect.any(Number),
        }));
    }));
    test("GET /users/:id should return 404 if user does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).get("/users/1032").expect(404);
    }));
    test("POST /users should return 201", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app)
            .post("/users")
            .send({
            name: "alvaro",
            email: "alvaro@gmail.com",
        })
            .expect(201);
    }));
    test("POST /users should return object with name, email and id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).post("/users").send({
            name: "alvaro",
            email: "alvaro@gmail.com",
        });
        const user = response.body;
        expect(user).toEqual(expect.objectContaining({
            name: "alvaro",
            email: "alvaro@gmail.com",
            id: expect.any(Number),
        }));
    }));
    test("PUT /users/:id should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app)
            .put("/users/1")
            .send({
            name: "lukita",
            email: "luka@gmail.com",
        })
            .expect(200);
    }));
    test("PUT /users/:id should return update user object", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).put("/users/1").send({
            name: "lukita",
            email: "luka@gmail.com",
        });
        const user = response.body;
        expect(user).toEqual(expect.objectContaining({
            name: "lukita",
            email: "luka@gmail.com",
            id: expect.any(Number),
        }));
    }));
    test("DELETE /users/:id should return 204", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).delete("/users/1").expect(204);
    }));
});
