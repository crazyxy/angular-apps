"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iex_api_1 = require("iex-api");
var isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
var iex = new iex_api_1.IEXClient(isomorphic_fetch_1.default);
exports.stock = function (req, res) {
    iex.stockCompany(req.params.company).then(function (data) {
        res.send(data);
    });
};
