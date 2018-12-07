"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var lusca_1 = __importDefault(require("lusca"));
var stock_1 = require("./controllers/stock");
exports.app = express_1.default();
// Configuration Section
exports.app.set("port", process.env.PORT || 3000);
// Middleware
exports.app.use(compression_1.default());
exports.app.use(lusca_1.default.xframe("SAMEORIGIN"));
exports.app.use(lusca_1.default.xssProtection(true));
// API Path Section
exports.app.get("/stock/:company", stock_1.stock);
