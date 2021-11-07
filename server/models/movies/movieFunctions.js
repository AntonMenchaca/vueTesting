let Movie = require("./movie");

module.exports = {
  saveMovie: (newMovie) => {
    return Movie.create(newMovie);
  },
  deleteMovie: (MovieID) => {
    return Movie.findByIdAndDelete(MovieID);
  },
};
