"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var server = app_1.app.listen(3000, function () {
    console.log("running");
});
exports.default = server;
