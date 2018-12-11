"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iex_api_1 = require("iex-api");
var isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
var iex = new iex_api_1.IEXClient(isomorphic_fetch_1.default);
exports.company = function (req, res) {
    iex.stockCompany(req.params.company).then(function (data) { return res.send(data); });
};
exports.price = function (req, res) {
    iex.stockPrice(req.params.company).then(function (data) { res.json(data); });
};
exports.logo = function (req, res) {
    iex.stockLogo(req.params.company).then(function (data) { return res.send(data); });
};
exports.news = function (req, res) {
    iex.stockNews(req.params.company).then(function (data) { return res.send(data); });
};
exports.financials = function (req, res) {
    iex.stockFinancials(req.params.company).then(function (data) { return res.send(data); });
};
exports.chart = function (req, res) {
    iex.stockChart(req.params.company, '6m').then(function (data) { return res.send(data); });
};
exports.companies = function (req, res) {
    iex.symbols().then(function (data) { return res.send(data); });
};
