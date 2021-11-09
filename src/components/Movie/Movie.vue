<template>
  <div
    :style="{
      backgroundImage:
        'url(https://image.tmdb.org/t/p/w1280/' + movie.backdrop_path + ')',
      backgroundSize: 'cover',
    }"
    className="video-player"
  >
    <div className="embed-responsive">
      <iframe
        className="embed-responsive-item"
        :src="'https://www.youtube.com/embed/' + movie.video"
        allowFullScreen
      ></iframe>
    </div>
    <div className="video-player-details">
      <h2>{{ movie.title }}</h2>
      <h3 :class="this.movie.vote_average < 7  ? 'fail' : 'pass'" >{{movie.vote_average}}</h3>
      <div>{{ movie.overview }}</div>
      <MovieBtn 
      :movie="movie"
      :isFavorited="favorited"
      @handle-favorite-click="$emit('handle-favorite-click', this.isFavorited, this.movie)" @handle-remove-click="$emit('handle-remove-click', this.isFavorited, this.movie._id)"/>
    </div>
  </div>
</template>

<script>
import MovieBtn from './MovieBtn.vue'
export default {
  name: "Movie",
  data: function () {
    return {
    };
  },
  components: {
    MovieBtn
  },
  props: {
    favorited: Boolean,
    movie: Object,
    video: String
  },
  emits: ['handle-favorite-click', "handle-remove-click"]
};
</script>

<style>
.fail {
  color: rgb(235, 159, 72)
}
.pass {
  color: rgb(44, 163, 44);
}
.video-player-details {
  margin: 0 5px;
}
.embed-responsive {
  display: flex;
  justify-content: center;
  
}
.embed-responsive-item {
  width: 70vw;
}

.video-player {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
iframe {
  width: 100%;
  height: 60vh;
}

.video-player-details {
  padding: 8px;
  border: 0;
  background-color: rgb(231, 231, 210);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}
</style>
