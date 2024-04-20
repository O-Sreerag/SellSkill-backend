import express, { Request, Response, json } from "express";
import  routes  from "./frameworks/expressSpecific/routes";
import dependencies from "./config/dependencies";

const app = express();
app.set('trust-proxy',true)
app.use(json())
// console.log(dependencies)
app.use("/auth", routes(dependencies)); 

export { app };