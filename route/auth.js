const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

//get signup form
router.get("/register", async (req, res) => {
  res.render("auth/signup");
});
router.post("/register", async (req, res) => {
  try {
    // console.log(req.body);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
    });
    await User.register(user, req.body.password);
    req.flash("success", "registered successfully");
    res.redirect("/products");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
});

//get the login in form
router.get("/login", async (req, res) => {
  res.render("auth/login");
});
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res) => {
    req.flash("success", `welcome Back!!${req.user.username}`);
    res.redirect("/products");
  }
);
//logout the form
router.get("/logout", (req, res) => {
  req.logOut(() => {
    req.flash("success", "logout the successfully");
    res.redirect("/login");
  });
});

module.exports = router;
