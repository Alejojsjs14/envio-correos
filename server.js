import app from "./app.js";
import { PORT } from "./utils/env.config.js";

const port = PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/api`);
});
