const express = require("express");
const router = express.Router();

// Saknas: koppling till Firebase
// OBS: lägg till filen med Firebase-hemligheter i .gitignore
const data = [
  { name: "Yassine", level: 3 },
  { name: "Jaya", level: 11 },
  { name: "Anna", level: 10 },
  { name: "Andre", level: 5 },
];
// GET /partisipents/
router.get("/", (req, res) => {
  res.send(data);
});

// POST /partisipents/
router.post("/", (req, res) => {
  // Obs! Validera innan ni laddar upp till FireStore
  const newpartisipent = req.body;
  console.log("POST new partisipent: ", newpartisipent);
  data.push(newpartisipent);
  res.sendStatus(200);
});

module.exports = router;
