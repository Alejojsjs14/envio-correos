import express, { json } from "express";
import errorHandler from "./middlewares/error.middleware.js";
import router from "./routes/routes.js";

const app = express();

app.use(json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

// Middleware
app.use(errorHandler);

export default app;
