

const {  genreURL } = require("../server/helpers/apiHelpers.js");

const axios = require('axios')

exports.getGenres = (req, res) => {
    return axios
      .get(genreURL)
      .then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (err) {
        console.log("failed to get movie genres: ", err);
      });
  }