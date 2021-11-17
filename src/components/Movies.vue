<template>
  <ul className="movies">
    <li
      v-for="movie in movies"
      @dblclick="$emit('handle-selected-movie', movie)"
      :key="movie.title"
      className="movie-item"
    >
      <img :src="'https://image.tmdb.org/t/p/w1280/' + movie.poster_path" />
      <h1 className="main-title">{{movie.title}}</h1>
      <div className="movie-description">
        
        <h2>{{ movie.overview }}</h2>
        <section className="movie-details">
          <div className="movie-year">
            <span className="title">Rating</span>
            <span>{{ movie.release_date }}</span>
          </div>
          <div className="movie-rating">
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
  props: {
    
    movies: Array,
  },
};
</script>

<style>
.movies {
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 20px;
  background-color: #f5e6e6;
}

.movie-item {
  flex-basis: 22%;
  box-sizing: border-box;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  list-style: none;

  background-color: rgb(28, 23, 23);
  border: 1px solid #eee;
  box-shadow: 0 10px 28px -7px rgba(0, 0, 0, 0.1);
}

.movie-item:hover {
  cursor: pointer;
}

.movie-item > img {
  width: 100%;
}

.movie-description {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  color: white
}

.main-title {
  padding: 10px;
  color: rgb(255, 250, 250);
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
}

.movie-description h2 {
  color: rgb(233, 225, 225);
  font-weight: bold;
  margin-bottom: 20px;
  padding-left: 5px;
}

.movie-details {
  display: flex;
  justify-content: space-between;
}

.movie-details span {
  color: #555;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-year,
.movie-rating {
  display: flex;
  flex-direction: column;
}

.movie-year .title,
.movie-rating .title {
  color: #aaa;
  margin-bottom: 5px;
  font-size: 0.65rem;
  font-weight: normal;
}

.movie-rating {
  align-items: flex-end;
}
</style>
