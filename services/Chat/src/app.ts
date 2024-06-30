// src/app.ts

import express, { Request, Response, json } from "express";
import  routes  from "./frameworks/expressSpecific/routes";
import dependencies from "./config/dependencies";

const app = express();
app.set('trust-proxy',true)
app.use(json())
app.use("/chat", routes(dependencies));

export { app };  