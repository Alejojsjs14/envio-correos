import express, { json } from "express";
import emailHelper from "./helpers/emailHelper.js";
import { PORT } from './utils/env.config.js'

const app = express();

// Middleware
app.use(json());

// Routes
app.post("/email", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    let info = await emailHelper(to, subject, text);
    res.status(200).send(`Email sent: ${info.response}`);
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

const port = PORT || 8080

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
