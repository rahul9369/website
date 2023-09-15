const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "Please Login to add new product");
    return res.redirect("/login");
  }
  next();
};
module.exports = {
  isLoggedIn,
};
