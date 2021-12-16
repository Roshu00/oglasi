const loginDAO = require("../dao/login");
const sellerDAO = require("../dao/seller");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

class loginService {
  async createNewUser(newUser) {
    const {
      email,
      password,
      username,
      name,
      lastName,
      description,
      phoneNumber,
      address,
      imageUrl,
    } = newUser;

    //Hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const id = await loginDAO.createNewUser(email, hashedPassword);

    const uploadedResponse = await cloudinary.uploader.upload(imageUrl);
    const imagePath = uploadedResponse.public_id;

    console.log(
      email,
      password,
      username,
      name,
      lastName,
      description,
      phoneNumber,
      address,
      imagePath
    );
    const sellerInfo = await sellerDAO.createSeller(
      id,
      username,
      name,
      lastName,
      description,
      phoneNumber,
      address,
      imagePath
    );
    return jwt.sign({ _id: sellerInfo }, process.env.TOKEN_SECRET);
  }

  async loginUser(user) {
    const { email, password } = user;
    const userInfo = await loginDAO.loginUser(email);

    const validPass = await bcrypt.compare(password, userInfo.password);
    if (validPass) {
      const token = jwt.sign({ _id: userInfo.id }, process.env.TOKEN_SECRET);
      const userReturn = await sellerDAO.getSeller(userInfo.id);
      return { token, userReturn };
    } else {
      return Null;
    }
  }

  async getUserData(id) {
    return loginDAO.getUserData(id);
  }
}

module.exports = new loginService();
