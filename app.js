import express from "express";
import bodyParser from "body-parser";
import { cardsRouter } from "./routes/cards.js";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/auth", authRouter);

app.use("/cards", authenticate, cardsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
