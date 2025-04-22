const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/posts.js");

app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Entry point");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
})