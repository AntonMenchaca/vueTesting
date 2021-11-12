var models = require("../server/models");
var movie = models.movie;


exports.saveMovie = (req, res) => {
  console.log(req.body.newMovie)
  return movie
    .saveMovie(req.body.newMovie)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
  }