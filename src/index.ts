import express from "express";

import healthChecker from "./routes/healt";

const app = express();

app.get("/status", async (_, res) => {
  return res.send("Working!");
});

app.use("/health", healthChecker);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
