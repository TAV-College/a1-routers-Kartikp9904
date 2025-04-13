const express = require("express");
const { initDB } = require("../models/db_base");
const { getAllBooks } = require("../models/books");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();
    res.render("index", { title: "Home", books: books });
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).send("Error loading books.");
  }
});

router.get("/init", (req, res) => {
  console.log("Initializing database..")
  initDB();
  res.json({ msg: "DB initialized" });
});

module.exports = router;
