const express = require("express");
const router = express.Router();
const path = require("path");
const postController = require("../controllers/posts");

router.get("/", postController.getPosts);

router.get("/post/:postId", postController.getPost);

module.exports = router;
