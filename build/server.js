"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.app.listen(app_1.app.get("port"), "0.0.0.0");
exports.default = server;
