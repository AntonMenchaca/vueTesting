const { searchURL } = require("../server/helpers/apiHelpers.js");

const axios = require('axios')

exports.getSearch = (req, res) => { 
    return axios
      .get(`${searchURL}${req.query.with_genres}`)
      .then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (err) {
        console.log("failed to search for movies: ", err);
      });
  }