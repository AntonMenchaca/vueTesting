

const axios = require('axios')

exports.getSearch = (req, res) => { 
    return axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${req.query.with_genres}`)
      .then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (err) {
        console.log("failed to search for movies: ", err);
      });
  }