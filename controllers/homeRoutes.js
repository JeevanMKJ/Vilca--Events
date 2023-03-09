// get to request all events from db

// get redirect to log in/sign up

// get redirect to handle events

// get request event by id

const axios = require("axios");
const router = require("express").Router();
const { authChecker } = require("../../utils/authChecker");

router.get("/", async (req, res) => {
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
