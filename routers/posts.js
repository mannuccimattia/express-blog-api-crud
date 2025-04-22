const express = require("express");
const router = express.Router();
const posts = require("../data/posts_arr.js")

// index
router.get("/", (req, res) => {
  res.json(posts);
})

// show
router.get("/:id", (req, res) => {
  !posts[req.params.id - 1] ? res.send("Post non trovato") : res.json(posts[req.params.id - 1]);
})

// store
router.post("/", (req, res) => {
  res.send("Aggiungi un nuovo post");
})

// update
router.put("/:id", (req, res) => {
  res.send(`Modifica totale del post ${req.params.id}`);
})

// modify
router.patch("/:id", (req, res) => {
  res.send(`Modifica parziale del post ${req.params.id}`);
})

// delete
router.delete("/:id", (req, res) => {
  res.send(`Elimina il post ${req.params.id}`);
})

module.exports = router;