const express = require("express");
const {
  registerUser,
  loginUser,
  userInfo,
} = require("../../controllers/mongodb/userController");
const validateToken = require("../../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", validateToken ,userInfo);

module.exports = router;
