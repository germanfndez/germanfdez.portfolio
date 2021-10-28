import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import startConfig from "../config/index.js";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Logging
app.use(morgan("dev"));

// Config
startConfig(app);

//Routes

import authRouter from "../modules/auth/route/index.js";
app.use("/auth", authRouter);

// Routes Middleware
import notFound from "../middleware/notFound.js";
app.use(notFound);

export default app;
