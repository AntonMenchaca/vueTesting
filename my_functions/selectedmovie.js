var models = require("../server/models");
var movie = models.movie;

exports.deleteMovie= (req, res) => {
    return movie
      .deleteMovie(req.body.movieID)
      .then(() => res.send("deleted movie"))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }