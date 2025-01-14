import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const users = [
  { username: "user1", password: "password123" },
  { username: "user2", password: "password456" },
];

router.post("/getToken", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const payload = { username: user.username };
  const token = jwt.encode(payload, process.env.JWT_SECRET);

  res.json({ token });
});

export { router as authRouter };
