const express = require("express");
const router = express.Router();
// importo l'array dei post
const posts = require("../data/posts_arr.js");
// importo i metodi da postsController
const postsController = require("../controllers/postsController.js");

// index
router.get("/", postsController.index);

// show
router.get("/:id", postsController.show);

// store
router.post("/", postsController.store);

// update
router.put("/:id", postsController.update);

// modify
router.patch("/:id", postsController.modify);

// delete
router.delete("/:id", postsController.destroy);

module.exports = router;