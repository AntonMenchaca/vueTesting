
var videoURL = (movieID) => {
    return (`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${process.env.API_KEY}&language=en-US`)}

const axios = require('axios')
exports.getVideoURL= (req, res) => {
    axios.get(`${videoURL(req.query.movieID)}`)
    .then(({data}) => {
      res.send(data)})
      .catch((err) => {
      console.log(err)
      res.sendStatus(500)})
  }