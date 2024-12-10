import express, { json } from "express";
import log from "morgan";
import { NODE_ENV } from "./utils/env.config.js";
import errorHandler from "./middlewares/error.middleware.js";
import router from "./routes/routes.js";

const app = express();

app.use(log(NODE_ENV || "local"));

app.use(json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

// Middleware
app.use(errorHandler);

export default app;
