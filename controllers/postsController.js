const posts = require("../data/posts_arr.js");

// INDEX
function index (req, res) {
  res.json(posts);
}

// SHOW
function show (req, res) {
  !posts[req.params.id - 1] ? res.send("Post non trovato") : res.json(posts[req.params.id - 1]);
}

// STORE
function store (req, res) {
  res.send("Aggiungi un nuovo post");
}

// UPDATE
function update (req, res) {
  res.send(`Modifica totale del post ${req.params.id}`);
}

// MODIFY
function modify (req, res) {
  res.send(`Modifica parziale del post ${req.params.id}`);
}

// DESTROY
function destroy (req, res) {
  res.send(`Elimina il post ${req.params.id}`);
}

module.exports = { index, show, store, update, modify, destroy }