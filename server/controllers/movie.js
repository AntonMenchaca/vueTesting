var models = require("../models");
var movie = models.movie;
const { searchURL, genreURL, videoURL } = require("../helpers/apiHelpers.js");
const axios = require("axios");

module.exports = {
  getSearch: (req, res) => {
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
    return axios
      .get(`${genreURL}`)
      .then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (err) {
        console.log("failed to get movie genres: ", err);
      });
  },

  getGenres: (req, res) => {
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
    console.log(req.body.newMovie)
    return movie
      .saveMovie(req.body.newMovie)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getFavorites: (req, res) => {
    return movie.getFavorites()
    .then((response)=> {
      res.send(response)})
      .catch((err) => console.log(err))
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
  getVideoURL: (req, res) => {
    axios.get(`${videoURL(req.query.movieID)}`)
    .then(({data}) => {
      res.send(data)})
      .catch((err) => {
      console.log(err)
      res.sendStatus(500)})
  }
};
