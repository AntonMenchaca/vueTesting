<template>
  <ul className="movies">
    <li v-for="movie in movies" :key="movie.title" className="movie_item"></li>
    <!-- 
        
        {this.props.movies.map((movie) => (
      <li v-for="movie in movies" onClick={} className="movie_item">
        <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} />
        <div className="movie_description">
          <h2>{movie.overview}</h2>
          <section className="movie_details">
            <div className="movie_year">
              <span className="title">Rating</span>
              <span>{movie.release_date}</span>
            </div>
            <div className="movie_rating">
              <span className="title">{movie.title}</span>
              <span>{movie.vote_average}</span>
            </div>
          </section>
        </div>
      </li>
      ))} -->
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "Movies",
  components: {},
  data: function () {
    return {};
  },
  props: {
    movies: Array,
    favorites: Array,
    showFaves: Boolean,
  },
  computed: {
    moviesComputed() {
      return this.movies;
    },
  },
  created: function () {
    axios
      .get("./genres")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
