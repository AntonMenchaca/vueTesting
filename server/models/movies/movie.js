const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  name: String,
  image: String,
  description: String,
  releaseYear: String,
  voteAverage: Number,
});

const movie = mongoose.model("movie", movieSchema);

module.exports = movie;
