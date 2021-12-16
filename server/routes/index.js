const express = require("express");
const postController = require("../controller/post");
const sellerController = require("../controller/seller");
const loginController = require("../controller/login");
const validateDto = require("../middleware/validate-dto");
const postDto = require("../dto/post");
const filterDto = require("../dto/filter");
const registerDto = require("../dto/register");
const verifyToken = require("../middleware/verify-token");
const uploadCloud = require("../middleware/upload-image");
const fetch = require("cross-fetch");

const router = express.Router();

// FINISHED LOGIN RETURNING TOKEN AND CREATING USER
// NEED TO HAVE TOKEN IN HEADER TO POST
// POSTS ARE AVELABLE TO EVERYONE
// PUT EVERTHING U DID SO FAR ON FILE AND SEE WHAT U NEED TO DO NEXT

//TODO create seperate files for diferent routes and export then throuth this file!!

//post routes
router.get("/post/:id", postController.getPost);

router.get("/posts/all", postController.getAllPosts);

router.post(
  "/posts/query",
  validateDto(filterDto),
  postController.getQueryPosts
);
// NAMESTI OVDE ENDPOIT ZA OGLASE KOJI CE SE QUEROVATI PRKO LINKA OD FRONTENDA
router.get(
  "/search/:brand/:model/:lowPrice/:highPrice/:used",
  postController.queryPosts
);

router.post(
  "/post/create",
  verifyToken,
  validateDto(postDto),
  postController.createPost
);

router.delete("/post/:id", postController.deletePost);

router.post("/image/post", postController.uploadImage);

// seller routes
router.get("/seller/getprofile/:id", sellerController.getSeller);

router.put("/seller/update", verifyToken, sellerController.updateSeller);

router.post("/seller/create", verifyToken, sellerController.createSeller);

//login routes
router.post("/login/register", loginController.createNewUser);

router.post(
  "/login/login",
  validateDto(registerDto),
  loginController.loginUser
);

router.post("/models", async (req, res) => {
  console.log(req.body);
  const { detail } = req.body;
  if (!detail) {
    return res.json([]);
  }
  try {
    const dataresive = await fetch(detail);
    const data = await dataresive.json();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.error(err);
  }
});

router.post("/modelInfo", async (req, res) => {
  const { detail } = req.body;
  if (!detail) {
    return res.json({});
  }
  try {
    const datarecive = await fetch(detail);
    const data = await datarecive.json();
    res.json(data);
  } catch (err) {
    console.error(err);
  }
});

router.get("/login/token", verifyToken, sellerController.getSellerWithToken);

router.get("/login/logout", verifyToken, loginController.logOut);

module.exports = router;
