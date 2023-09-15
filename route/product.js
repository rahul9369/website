const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Review = require("../models/review");
const { isLoggedIn } = require("../middleware");

//display all products
router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

//get the form for new products
router.get("/products/new", isLoggedIn, (req, res) => {
  res.render("products/new");
});

//create new product
router.post("/products", isLoggedIn, async (req, res) => {
  try {
    await Product.create(req.body.product);
    req.flash("success", "Product create Successfully");
    res.redirect("/products");
  } catch (e) {
    console.log(e.massage);
    req.flash("error", "cannot cretae products");
    res.render("error");
  }
});

//show perticular product
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("reviews");
    res.render("products/show", { product });
  } catch (e) {
    console.log(e.massage);
    req.flash("error", "cannot cretae products");
    res.render("error");
  }
});

//edit product
router.get("/products/:id/edit", isLoggedIn, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("products/edit", { product });
  } catch (e) {
    console.log(e.massage);
    req.flash("error", "cannot cretae products");
    res.render("error");
  }
});
//update
router.patch("/products/:id", isLoggedIn, async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body.product);
    req.flash("success", "update Successfully");
    res.redirect(`/products/${req.params.id}`);
  } catch (e) {
    console.log(e.massage);
    req.flash("error", "cannot cretae products");
    res.render("error");
  }
});

//delete a particular product
router.delete("/products/:id", isLoggedIn, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    req.flash("success", "Delete Successfully");
    res.redirect("/products");
  } catch (e) {
    console.log(e.massage);
    req.flash("error", "cannot cretae products");
    res.render("error");
  }
});

//create a new comment on a product
router.post("/products/:id/review", isLoggedIn, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    // const review = new Review(req.body);
    const review = new Review({
      user: req.user.username,
      ...req.body,
    });
    product.reviews.push(review);
    await review.save();
    await product.save();
    res.redirect(`/products/${req.params.id}`);
  } catch (e) {
    console.log(e.massage);
    req.flash("error", "cannot cretae products");
    res.render("error");
  }
});

router.get("/error", (req, res) => {
  res.status(500).render("error");
});

module.exports = router;
