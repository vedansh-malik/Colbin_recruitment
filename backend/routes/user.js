const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// Get logged-in user profile
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
