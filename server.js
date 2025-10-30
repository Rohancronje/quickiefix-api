import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Health check
app.get("/health", (req, res) => res.send("ok"));

// Example auth endpoints you can wire up later
app.post("/api/signup", (req, res) => {
  // TODO: validate, save user, etc.
  res.json({ ok: true, message: "Signup received" });
});

app.post("/api/login", (req, res) => {
  // TODO: authenticate
  res.json({ ok: true, token: "dev-token" });
});

const port = process.env.PORT || 5173;
app.listen(port, "0.0.0.0", () => {
  console.log(`API listening on http://0.0.0.0:${port}`);
});
