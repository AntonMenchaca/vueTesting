var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.post("/movie", controllers.movie.saveMovie);
router.get("/movies", controllers.movie.getSearch);
router.get("/genres", controllers.movie.getGenres);
router.delete("/movie", controllers.movie.deleteMovie);
router.get("/favorites", controllers.movie.getFavorites)
router.get("/videoURL", controllers.movie.getVideoURL)
module.exports = router;
