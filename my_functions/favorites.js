var models = require("../server/models");
var movie = models.movie;


exports.getFavorites = (req, res) => {
    return movie.getFavorites()
    .then((response)=> {
      res.send(response)})
      .catch((err) => console.log(err))
  }