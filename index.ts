"use strict";

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { json } from "body-parser";
import { foodsRouter } from "./src/routes/foods";

dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(foodsRouter)

app.get("/", (req: Request, res: Response) => { 
    res.send("Starting server...");
})


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
