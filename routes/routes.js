import emailController from "../controller/emailController.js";
import httpStatus from "http-status";
import { Router } from "express";
import { NODE_ENV } from "../utils/env.config.js";

const router = Router();

router.get("/health", (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    status: "UP",
    environment: NODE_ENV || "Not defined",
  });
});

router.post("/email", emailController.email);

export default router;
