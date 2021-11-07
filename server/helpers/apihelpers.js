require("dotenv").config();

var searchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=`;

var genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`;

var genreFilterURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with`;

module.exports.searchURL = searchURL;
module.exports.genreURL = genreURL;
module.exports.genreFilterURL = genreFilterURL;
