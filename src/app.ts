import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Inbox Automation backend is running!");
});

export default app;
