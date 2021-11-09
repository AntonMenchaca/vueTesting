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
        :src="'https://www.youtube.com/embed/' + video"
        allowFullScreen
      ></iframe>
    </div>
    <div className="video-player-details">
      <h2>{{ movie.title }}</h2>
      <div>{{ movie.overview }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data: function () {
    return {};
  },

  props: {
    movie: Object,
  },
};
</script>

<style>
.embed-responsive {
  width: 100vw;
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
