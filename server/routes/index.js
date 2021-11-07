var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.get("/movie", controllers.movie.saveMovie);
router.get("/genres", controllers.movie.getGenres);
router.delete("/movie", controllers.movie.deleteMovie);

module.exports = router;
