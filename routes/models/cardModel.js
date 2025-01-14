import fs from "fs";
import path from "path";

const cardsPath = path.join(__dirname, "../data/cards.json");

export const readCards = () => {
  const data = fs.readFileSync(cardsPath, "utf8");
  return JSON.parse(data);
};

export const writeCards = (cards) => {
  fs.writeFileSync(cardsPath, JSON.stringify(cards, null, 2), "utf8");
};
