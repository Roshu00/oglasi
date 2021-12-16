const sellerService = require("../service/seller");

class SellerController {
  async getSeller(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const seller = await sellerService.getSeller(id);
      res.json(seller);
    } catch (err) {
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }

  async updateSeller(req, res) {
    try {
      const id = req.user._id;
      const updatedSeller = await sellerService.updateSeller(id, req.body);
      res.json(updatedSeller);
    } catch (err) {
      console.error(err);
      res.status(400).json("something went wrong");
    }
  }

  async createSeller(req, res) {
    try {
      const sellerId = await sellerService.createSeller(req.user, req.body);
      res.json(sellerId);
    } catch (err) {
      res.status(400).json("seller not created");
    }
  }

  async getSellerWithToken(req, res) {
    const id = req.user._id;
    try {
      const sellerInfo = await sellerService.getSellerWithToken(id);
      res.status(200).json(sellerInfo);
    } catch (err) {
      console.log(err);
      res.status(400).json("dont have token");
    }
  }
}

module.exports = new SellerController();
