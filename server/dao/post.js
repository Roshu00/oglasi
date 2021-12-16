const { v4: uuidv4 } = require("uuid");
const Posts = require("../db/models/post");
const dbSetup = require("../db/db-setup");

dbSetup();

class PostDAO {
  async createPost(seller, brand, model, price, description, imagePath, used) {
    try {
      const { postId } = await Posts.query()
        .insert({
          postId: uuidv4(),
          seller: seller,
          product: "phone",
          brand,
          model,
          price,
          description,
          imagesPath: imagePath,
          used,
        })
        .returning("postId");
      return postId;
    } catch (err) {
      console.error(err);
    }
  }

  async getPost(id) {
    const post = await Posts.query()
      .where("postId", id)
      .withGraphFetched("sellers");
    return post;
  }

  async deletePost(id) {
    await Posts.query().delete().where("postId", id);
  }

  async getAllPosts() {
    const allPosts = await Posts.query()
      .select("*")
      .withGraphFetched("sellers");
    return allPosts;
  }

  async queryByProduct(product, lowPrice, highPrice) {
    const posts = await Posts.query()
      .where("product", product)
      .where("price", ">", lowPrice)
      .where("price", "<", highPrice)
      .withGraphFetched("sellers")
      .orderBy("created_at")
      .skipUndefined();

    return posts;
  }

  async queryByBrand(brand, lowPrice, highPrice) {
    const posts = await Posts.query()
      .where("brand", brand)
      .where("price", ">", lowPrice)
      .where("price", "<", highPrice)
      .withGraphFetched("sellers")
      .orderBy("created_at")
      .skipUndefined();

    return posts;
  }

  async queryByModel(model, lowPrice, highPrice) {
    const posts = await Posts.query()
      .where("model", model)
      .where("price", ">", lowPrice)
      .where("price", "<", highPrice)
      .withGraphFetched("sellers")
      .orderBy("created_at")
      .skipUndefined();

    return posts;
  }

  async queryByPrice(lowPrice, highPrice) {
    const posts = await Posts.query()
      .where("price", ">", lowPrice)
      .where("price", "<", highPrice)
      .withGraphFetched("sellers")
      .orderBy("created_at")
      .skipUndefined();

    return posts;
  }
}

module.exports = new PostDAO();
