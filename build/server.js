"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var server = app_1.app.listen(app_1.app.get("port"));
exports.default = server;
