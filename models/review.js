const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  comment: {
    type: String,
    require: true,
  },
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
