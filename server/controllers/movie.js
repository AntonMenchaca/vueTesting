var models = require("../models");
var movie = models.movie;
const { searchURL, genreURL } = require("../helpers/apiHelpers.js");
const axios = require("axios");

module.exports = {
  getSearch: (req, res) => {
    console.log("running getSearch");
    console.log(req.query);
    return axios
      .get(`${searchURL}${req.query.with_genres}`)
      .then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (err) {
        console.log("failed to search for movies: ", err);
      });
  },

  filterGenres: (req, res) => {
    console.log("running filterGenres");
    return axios
      .get(`${genreURL}`)
      .then(function (response) {
        console.log(req.body.id);
        res.status(200).send(response.data);
      })
      .catch(function (err) {
        console.log("failed to get movie genres: ", err);
      });
  },

  getGenres: (req, res) => {
    console.log("running getGenres");
    return axios
      .get(genreURL)
      .then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (err) {
        console.log("failed to get movie genres: ", err);
      });
  },
  saveMovie: (req, res) => {
    return movie
      .createMovie(req.body.newMovie)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  deleteMovie: (req, res) => {
    return movie
      .deleteMovie(req.body.movieID)
      .then(() => res.send("deleted movie"))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
