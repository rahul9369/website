if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
//const seedDB = require("./seed");
const productRoutes = require("./route/product");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user");
const authRoutes = require("./route/auth");
const cartRoutes = require("./route/cart");

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("OH NO ERROR");
    console.log(err);
  });
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(
  session({
    secret: "some-secret-example",
    resave: false,
    saveUninitialized: true,
    // cookie: {
    //   secure: false, // This will only work if you have https enabled!
    //   maxAge: 60000, // 1 min
    // },
  })
);
app.use(flash());

//initilising the product &   session for storing the user info
app.use(passport.initialize());
app.use(passport.session());
//configuring the passport to use local stratergy
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});
//seedDB();
app.use(authRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.get("/", (req, res) => {
  res.render("products/land");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server start at port 3000");
});
