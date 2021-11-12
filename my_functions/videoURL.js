const {  videoURL } = require("../server/helpers/apiHelpers.js");

const axios = require('axios')
exports.getVideoURL= (req, res) => {
    axios.get(`${videoURL(req.query.movieID)}`)
    .then(({data}) => {
      res.send(data)})
      .catch((err) => {
      console.log(err)
      res.sendStatus(500)})
  }