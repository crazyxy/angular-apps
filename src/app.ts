import express from 'express';
import compression from "compression";
import lusca from "lusca";

import * as stock from "./controllers/stock";

export const app = express();

// Configuration Section
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(compression());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// API Path Section
app.get("/company", stock.companies);
app.get("/company/:company", stock.company);
app.get("/company/:company/price", stock.price);
app.get("/company/:company/logo", stock.logo);
app.get("/company/:company/news", stock.news);
app.get("/company/:company/financials", stock.financials);
app.get("/company/:company/chart", stock.chart);