const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  poster_path: String,
  overview: String,
  release_date: String,
  vote_average: Number,
  backdrop_path: String,
  id: Number
});

const movie = mongoose.model("movie", movieSchema);

module.exports = movie;
