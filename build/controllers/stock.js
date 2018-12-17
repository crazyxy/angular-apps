"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const iex_api_1 = require("iex-api");
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const iex = new iex_api_1.IEXClient(isomorphic_fetch_1.default);
exports.company = (req, res) => {
    iex.stockCompany(req.params.company).then((data) => res.send(data));
};
exports.price = (req, res) => {
    iex.stockPrice(req.params.company).then((data) => { res.json(data); });
};
exports.logo = (req, res) => {
    iex.stockLogo(req.params.company).then((data) => res.send(data));
};
exports.news = (req, res) => {
    iex.stockNews(req.params.company).then((data) => res.send(data));
};
exports.financials = (req, res) => {
    iex.stockFinancials(req.params.company).then((data) => res.send(data));
};
exports.chart = (req, res) => {
    iex.stockChart(req.params.company, '6m').then((data) => res.send(data));
};
exports.companies = (req, res) => {
    iex.symbols().then((data) => res.send(data));
};
