"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const PORT = 8080;
const server = app_js_1.app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
