const posts = require("../data/posts_arr.js");

// INDEX
function index (req, res) {
// definisco una variabile per il tag di ricerca
const unformattedTag = req.query.tags;

// se non inserisco nessuna tag restituisco tutto l'array
if(!unformattedTag){
  return res.json(posts)
}

// se esiste il tag lo formatto 
const tag = unformattedTag.substring(0, 1).toUpperCase() + unformattedTag.substring(1).toLowerCase();

// cerco tutti i post con il tag formattato
let filteredPosts = posts.filter(post => post.tags.includes(tag));

// se non ce ne sono restituisco 404 e un json di errore
if(filteredPosts.length === 0){
  res.status(404);

  return res.json({
    error: "Not Found",
    message: "Post not found"
  });
}

// altrimenti restituisco i post filtrati
return res.json(filteredPosts);
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
  // definisco id
  const id = parseInt(req.params.id);
  // cerco il posts con id richiesto
  const post = posts.find(post => post.id === id);
  // elimino l'elemento trovato
  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy }