"use strict";

import express from "express";
import dotenv from "dotenv";
import { json } from "body-parser";
import mongoose, { ConnectOptions } from "mongoose"
import { restaurantsRouter } from "./src/routes/restaurantsRoute";
import { menuRouter } from "./src/routes/menuRoute";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use("/restaurant", restaurantsRouter)
app.use("/menu", menuRouter)

console.log("Starting server...");
mongoose.connect(process.env.MONGODB_URI!, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
} as ConnectOptions)
.then(() => app.listen(port, () => console.log(`Server runnning on: http://localhost:${port}`)))
.catch((error) => console.log(error.message))
