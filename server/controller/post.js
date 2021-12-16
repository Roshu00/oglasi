const postService = require("../service/post");
const multer = require("multer");
const upload = multer({});

class PostController {
  async createPost(req, res) {
    try {
      console.log(req.body);
      const postId = await postService.createPost(req.body, req.user);
      console.log("OVO OVDE RADI ");
      return res.status(201).json(postId);
    } catch (err) {
      res.status(401).json("something went very wrong");
    }
  }

  async getPost(req, res) {
    try {
      const { id } = req.params;
      const post = await postService.getPost(id);
      res.status(200).json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }

  async uploadImage(req, res) {
    try {
      const uploadedImage = await postService.uploadImage();
      res.json("succsess");
    } catch (err) {
      console.error(err);
      res.json("error");
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const deletedPost = await postService.deletePost(id);
      res.json(`succsessfuly deleted ${id} post!`);
    } catch (err) {
      res.status(400).json("something went wrong");
    }
  }

  async getAllPosts(req, res) {
    try {
      const allPosts = await postService.getAllPosts();
      res.status(200).json(allPosts);
    } catch (err) {
      console.error(err);
    }
  }

  async getQueryPosts(req, res) {
    try {
      console.log(req.body);
      const { brand, model, lowPrice, highPrice } = req.body;
      const posts = await postService.getQueryPosts(
        brand,
        model,
        lowPrice,
        highPrice
      );
      res.status(201).json(posts);
    } catch (err) {
      console.error(err);
    }
  }

  async queryPosts(req, res) {
    try {
      const { brand, model, lowPrice, highPrice, used } = req.params;
      const posts = await postService.getQueryPosts(
        brand,
        model,
        lowPrice,
        highPrice
      );
      res.status(201).json(posts);
    } catch (err) {
      console.error(err);
      res.status(400).json("bad req");
    }
  }
}

module.exports = new PostController();
