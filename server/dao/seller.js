const Seller = require("../db/models/seller");

class SellerDAO {
  async createSeller(
    id,
    username,
    name,
    lastName,
    description,
    phoneNumber,
    address,
    imagePath
  ) {
    const sellerId = await Seller.query()
      .insert({
        id: id,
        username,
        name,
        last_name: lastName,
        description,
        phone_number: phoneNumber,
        promo: false,
        rating: 0,
        address: address,
        image_url: imagePath,
      })
      .returning("id");

    return sellerId;
  }

  async getSeller(id) {
    console.log(`DAO ${id}`);
    const seller = await Seller.query().findById(id).withGraphFetched("posts");
    return seller;
  }

  async updateSeller(id, body) {
    console.log(body);
    const updatedSeller = await Seller.query().findById(id).patch({
      username: body.username,
      name: body.firstName,
      last_name: body.lastName,
      description: body.description,
      phone_number: body.phoneNumber,
      address: body.address,
    });
    return id;
  }

  async getSellerWithToken(id) {
    const seller = await Seller.query().findById(id);
    return seller;
  }
}

module.exports = new SellerDAO();
