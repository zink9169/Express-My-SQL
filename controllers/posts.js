// const posts = [];
const { where } = require("sequelize");
const Post = require("../models/post");
exports.createPost = (req, res) => {
  const { title, description, photo } = req.body;

  req.user
    .createPost({
      title,
      description,
      photo,
    })
    .then((result) => {
      console.log(result);
      console.log("New Post Created");
      res.redirect("/");
      //
    })
    .catch((err) => {
      console.log(err);
      console.log(result);
    });
};

exports.renderCreatePage = (req, res) => {
  res.render("addPost", { title: "Post create ml" });
};

exports.getPosts = (req, res) => {
  Post.findAll({ order: [["createdAt", "asc"]] })
    .then((posts) => {
      res.render("home", { title: "Home Page", postsArr: posts });
    })
    .catch((err) => console.log(err));
};

exports.getPost = (req, res) => {
  const postId = req.params.postId;
  Post.findOne({ where: { id: postId } })
    .then((post) => {
      res.render("details", { title: "Post Details Page", post });
    })
    .catch((err) => console.log(err));
  // console.log(postId);
  //   const post = posts.find((post) => post.id === postId);
  //   console.log(post);
};

exports.deletePost = (req, res) => {
  const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => {
      if (!post) {
        res.redirect("/");
      }
      return post.destroy();
    })
    .then((result) => {
      console.log("Post Deleted");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getOldPost = (req, res) => {
  const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => {
      res.render("editPost", { title: `${post.title}`, post });
    })
    .catch((err) => console.log(err));
};

exports.updatePost = (req, res) => {
  const { title, description, photo, postId } = req.body;
  Post.findByPk(postId)
    .then((post) => {
      (post.title = title),
        (post.description = description),
        (post.photo = photo);
      return post.save();
    })
    .then((result) => {
      console.log(`Post id => ${postId} is updated successfully.`);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
