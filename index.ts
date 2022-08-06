"use strict";

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { json } from "body-parser";
import { foodsRouter } from "./src/routes/foods";
import mongoose, { ConnectOptions } from "mongoose"

dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(foodsRouter)

console.log("Starting server...");
mongoose.connect(process.env.MONGODB_URI!, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
} as ConnectOptions)
.then(() => app.listen(port, () => console.log(`Server runnning on: http://localhost:${port}`)))
.catch((error) => console.log(error.message))
