<template>
  <ul className="movies">
    <li
      v-for="movie in movies"
      @dblclick="$emit('handle-selected-movie', movie)"
      :key="movie.title"
      className="movie_item"
    >
      <img :src="'https://image.tmdb.org/t/p/w1280/' + movie.poster_path" />
      <div className="movie_description">
        <h2>{{ movie.overview }}</h2>
        <section className="movie_details">
          <div className="movie_year">
            <span className="title">Rating</span>
            <span>{{ movie.release_date }}</span>
          </div>
          <div className="movie_rating">
            <span className="title">{{ movie.title }}</span>
            <span>{{ movie.vote_average }}</span>
          </div>
        </section>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Movies",
  components: {},
  data: function () {
    return {};
  },
  props: {
    movies: Array,
  },
  methods: {},
};
</script>

<style>
.movies {
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  padding: 20px;
  overflow-y: scroll;
  background-color: #2c3e50;
}

.movie_item {
  flex-basis: 22%;
  box-sizing: border-box;
  margin: 1.5%;

  display: flex;
  flex-direction: column;
  list-style: none;

  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 10px 28px -7px rgba(0, 0, 0, 0.1);
}

.movie_item:hover {
  cursor: pointer;
}

.movie_item > img {
  width: 100%;
}

.movie_description {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}

.movie_description h2 {
  color: #555;
  font-weight: bold;
  margin-bottom: 20px;
}

.movie_details {
  display: flex;
  justify-content: space-between;
}

.movie_details span {
  color: #555;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie_year,
.movie_rating {
  display: flex;
  flex-direction: column;
}

.movie_year .title,
.movie_rating .title {
  color: #aaa;
  margin-bottom: 5px;
  font-size: 0.65rem;
  font-weight: normal;
}

.movie_rating {
  align-items: flex-end;
}
</style>
