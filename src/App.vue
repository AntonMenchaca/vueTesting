<template>
  <div className="app">
    <header className="navbar">
      <button name="Return" className="return-btn" v-if="movieSelected" @click="() => (movieSelected = false)" :style="{height:'60px', width: '150px'}"><strong>Return</strong></button>
      <h1 v-else>My Movie List</h1>
    </header>

    <div v-if="movieSelected === false" className="main">
      <Search
        @handle-genre-change="renderNewMovies"
        :genres="genres"
        :showFaves="showFaves"
        @handle-show-faves="handleFavorites"
      />
      <Movies
        @handle-selected-movie="handleMovieSelect"
        :movies="showFaves === true ? favorites : movies"
      />
    </div>
    <div v-else>
      <Movie
      :favorited="checkIfFavorited(selectedMovie)"
      @handle-remove-click="removeFavoriteMovie"
      @handle-favorite-click="addFavoriteMovie"
      :videoURL="videoURL" 
      :movie="selectedMovie" />
    </div>
  </div>
</template>

<script>
import Search from "./components/Search";
import Movies from "./components/Movies";
import Movie from "./components/Movie/Movie";
import axios from "axios";
export default {
  name: "App",
  data: function () {
    return {
      genres: [],
      movies: [],
      favorites: [],
      showFaves: false,
      selectedMovie: {},
      movieSelected: false,
      videoURL: ''
    };
  },
  components: {
    Search,
    Movies,
    Movie,
  },
  computed: {
    genresComputed() {
      return this.genres;
    },
    moviesComputed() {
      return this.movies;
    },
  },
  methods: {
    
    checkIfFavorited(movieObj) {
      let MovieFound = false;
     this.favorites.forEach((movie) => {
       if (movie.title === movieObj.title) {
         MovieFound = true
       }
     })
       return MovieFound
    },
    addFavoriteMovie(bool, {title, poster_path, overview, release_date, vote_average, backdrop_path, id}) {
    
      axios.post('/movie', {newMovie: {
         title,
        poster_path,
        overview,
        release_date,
        vote_average,
        backdrop_path,
        id
      }}).then(() => {
        axios.get('/favorites').then(({data}) => {
          this.favorites = data
          console.log('this is the faves after making api call',this.favorites)
        })
      }).catch((err) => console.log(err))
    },
    removeFavoriteMovie(bool, movieID){
      console.log(movieID)
      axios.delete('/selectedmovie', {data: {movieID}}).then(() => {
        axios.get('/favorites')
          .then(({data}) => {
            this.favorites = data})})
          .catch((err) => console.log(err))
    },
    renderNewMovies(id) {
      axios
        .get("/movies", {
          params: {
            with_genres: id,
          },
        })
        .then(({ data }) => {
          this.movies = data.results;
        })
        .catch((err) => console.log(err));
    },
    handleFavorites(boolean) {
      this.showFaves = !boolean;
    },

    handleMovieSelect(movie) {
      axios.get("/videoURL", {params: {
        movieID: movie.id
      }})
      .then(({data}) => {
        this.movieSelected = true;
      this.selectedMovie = movie;
      this.selectedMovie.video = data.results[data.results.length - 1].key 
      console.log(this.selectedMovie)
      })
      .catch((err) => console.log(err))
    },
  },
  created: function () {
    axios
      .get("/genres")
      .then(({ data }) => {
        this.genres = data.genres;
      })
      .catch((err) => console.log(err))
      .then(() =>
        axios
          .get("/movies", {
            params: {
              with_genres: 28,
            },
          })
          .then(({ data }) => {
            this.movies = data.results;
          })
          .catch((err) => console.log(err))
      ).then(() => {
         axios
          .get("/favorites")
          .then(({ data }) => { 
            this.favorites = data;
          })
          .catch((err) => console.log(err))

      })
  },
  
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  height: 100%;
  width: 100%;
}

button {
  color: #111111;
  background-color: #FFFFFF;
  width: 100%;
  padding: 0;
  text-align: center;
  align-self: center;
  margin: 1rem 0;
  transition: all 0.5s 50ms;
  border: 1px solid #111111
}
select option, button:hover {
  cursor: pointer;
  transition: all 0.5s 50ms;
  background-color: #34495E;
  color: #FAFAFA;
}
button:focus {
  outline: 1px solid #2e2e2e;
  outline-offset: -4px;
}
button:active {
  color: #2e2e2e;
  background-color: #FFFFFF;
}

.app {
  height: 100%;
  width: 100%;
  background-color: rgba(231, 76, 60, 0.25);
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.navbar {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  background-color: #1a1a1a;
  color: #fff;
  box-shadow: 0 10px 28px -7px rgba(0, 0, 0, 0.5);
  z-index: 2;
  padding: 20px;
}

.navbar > button {
  margin: 0;
  font-weight: 400;
  cursor: pointer;
}

.main {
  flex-grow: 1;
  display: flex;
}
</style>
