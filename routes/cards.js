import express from "express";
import {
  getAllCards,
  createCard,
  updateCard,
  deleteCard,
} from "../controllers/cardControllers.js";

const router = express.Router();
router.get("/", getAllCards);
router.post("/create", createCard);
router.put("/:id", updateCard);
router.delete("/:id", deleteCard);

export { router as cardsRouter };
