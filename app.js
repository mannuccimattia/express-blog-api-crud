// importo express
const express = require("express");
// inizializzo express
const app = express();
// definisco il numero di porta
const port = 3000;

// utilizzo il parser
app.use(express.json());

// importo il router
const postsRouter = require("./routers/posts.js");

// utilizzo il router
app.use("/posts", postsRouter);

// definisco l'entry point
app.get("/", (req, res) => {
  res.send("Entry point");
})

// lascio il server in ascolto 
app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
})