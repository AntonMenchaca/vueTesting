<template>
  <div className="app">
    <header className="navbar">
      <h1 @dblclick="() => (movieSelected = false)">My Movie List</h1>
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
      <Movie :movie="selectedMovie" />
    </div>
  </div>
</template>

<script>
import Search from "./components/Search";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
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
    renderNewMovies(id) {
      axios
        .get("./movies", {
          params: {
            with_genres: id,
          },
        })
        .then(({ data }) => {
          this.movies = data.results;
          console.log("this is the movies", this.movies);
        })
        .catch((err) => console.log(err));
    },
    handleFavorites(boolean) {
      console.log("this is what we get emitted up: ", boolean);
      this.showFaves = !boolean;
    },
    handleMovieSelect(movie) {
      this.movieSelected = true;
      this.selectedMovie = movie;
      console.log(movie);
    },
  },
  created: function () {
    axios
      .get("./genres")
      .then(({ data }) => {
        this.genres = data.genres;
      })
      .catch((err) => console.log(err))
      .then(() =>
        axios
          .get("./movies", {
            params: {
              with_genres: 28,
            },
          })
          .then(({ data }) => {
            this.movies = data.results;
          })
          .catch((err) => console.log(err))
      );
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
  background-color: #34495e;
  color: #fff;
  box-shadow: 0 10px 28px -7px rgba(0, 0, 0, 0.5);
  z-index: 2;
  padding: 20px;
}

.navbar > h1 {
  margin: 0;
  font-weight: 400;
  cursor: pointer;
}

.main {
  flex-grow: 1;
  display: flex;
}
</style>
