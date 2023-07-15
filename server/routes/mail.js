// In your backend API routes file (e.g., apiRoutes.js)

const express = require("express");
const router = require("express").Router();
const User = require("../model/User");

router.get("/user/email", (req, res) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    const userId = req.user.id;

    // Find the user by their ID
    User.findById(userId)
      .then((user) => {
        if (user) {
          // Send the user's email ID in the response
          res.json({ email: user.email });
        } else {
          res.status(404).json({ error: "User not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "Internal server error" });
      });
  } else {
    res.status(401).json({ error: "User not authenticated" });
  }
});

module.exports = router;
