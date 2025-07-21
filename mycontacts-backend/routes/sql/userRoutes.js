const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.status(200).json({ message: "Registered successfully" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Logged In successfully" });
});

router.get("/profile", (req, res) => {
  res.status(200).json({ message: "User Information" });
});
module.exports = router