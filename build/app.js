"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var lusca_1 = __importDefault(require("lusca"));
var stock = __importStar(require("./controllers/stock"));
exports.app = express_1.default();
// Configuration Section
exports.app.set("port", process.env.PORT || 3000);
// Middleware
exports.app.use(compression_1.default());
exports.app.use(lusca_1.default.xframe("SAMEORIGIN"));
exports.app.use(lusca_1.default.xssProtection(true));
// API Path Section
exports.app.get("/company", stock.companies);
exports.app.get("/company/:company", stock.company);
exports.app.get("/company/:company/price", stock.price);
exports.app.get("/company/:company/logo", stock.logo);
exports.app.get("/company/:company/news", stock.news);
exports.app.get("/company/:company/financials", stock.financials);
exports.app.get("/company/:company/chart", stock.chart);
