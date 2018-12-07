import express from 'express';
import compression from "compression";
import lusca from "lusca";

import { stock } from "./controllers/stock";

export const app = express();

// Configuration Section
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(compression());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// API Path Section
app.get("/stock/:company", stock);