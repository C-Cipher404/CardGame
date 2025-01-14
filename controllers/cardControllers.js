import { readCards, writeCards } from "../routes/models/cardModel.js";

export const getAllCards = (req, res) => {
  const cards = readCards();
  res.json(cards);
};

export const createCard = (req, res) => {
  const { name, set, type, power, toughness, rarity, cost } = req.body;
  const cards = readCards();
  const newCard = {
    id: cards.length + 1,
    name,
    set,
    type,
    power,
    toughness,
    rarity,
    cost,
  };
  cards.push(newCard);
  writeCards(cards);
  res.status(201).json({ message: "Card created", card: newCard });
};

export const updateCard = (req, res) => {
  const { id } = req.params;
  const { name, set, type, power, toughness, rarity, cost } = req.body;
  let cards = readCards();
  let card = cards.find((card) => card.id === parseInt(id));

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  card = { ...card, name, set, type, power, toughness, rarity, cost };
  cards = cards.map((c) => (c.id === parseInt(id) ? card : c));

  writeCards(cards);
  res.json({ message: "Card updated", card });
};

export const deleteCard = (req, res) => {
  const { id } = req.params;
  let cards = readCards();
  cards = cards.filter((card) => card.id !== parseInt(id));

  writeCards(cards);
  res.json({ message: "Card deleted" });
};
