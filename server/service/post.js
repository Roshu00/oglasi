const postDAO = require("../dao/post");
const cloudinary = require("cloudinary").v2;

class PostService {
  async createPost(postDto, seller) {
    const { brand, model, price, description, imagesPath, used, imageUrl } =
      postDto;
    try {
      const uploadedResponse = await cloudinary.uploader.upload(imageUrl);
      const imagePath = uploadedResponse.public_id;
      console.log(imagePath);
      return postDAO.createPost(
        seller._id,
        brand,
        model,
        price,
        description,
        imagePath,
        used
      );
    } catch (err) {
      console.error(err);
    }
  }

  uploadImage() {
    return "succsess";
  }

  getPost(id) {
    return postDAO.getPost(id);
  }

  deletePost(id) {
    return postDAO.deletePost(id);
  }

  getAllPosts() {
    return postDAO.getAllPosts();
  }

  getQueryPosts(brand = false, model = false, lowPrice, highPrice) {
    console.log(brand, model, lowPrice, highPrice);

    if (brand === "sve" || brand === "") {
      brand = false;
    }

    if (model === "sve" || model === "") {
      model = false;
    }

    if (lowPrice == undefined || lowPrice === "") {
      lowPrice = "0";
    }

    if (highPrice == undefined || highPrice === "") {
      highPrice = "10000";
    }

    if (model) {
      return postDAO.queryByModel(model, lowPrice, highPrice);
    } else if (brand) {
      return postDAO.queryByBrand(brand, lowPrice, highPrice);
    } else {
      return postDAO.queryByPrice(lowPrice, highPrice);
    }
  }
}

module.exports = new PostService();
