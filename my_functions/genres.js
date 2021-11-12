const axios = require('axios')

exports.getGenres = (req, res) => {
    return axios
      .get('https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US')
      .then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (err) {
        console.log("failed to get movie genres: ", err);
      });
  }