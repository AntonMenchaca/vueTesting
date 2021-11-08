<template>
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        :src="'https://www.youtube.com/embed/' + video"
        allowFullScreen
      ></iframe>
    </div>
    <div className="video-player-details">
      <h3>{{ title }}</h3>
      <div>{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data: function () {},
  props: {
    description: String,
    title: String,
    video: String,
  },
};
</script>

<style>
.video-player {
  margin: 0 20%;
  height: 50%;
}

.video-player-details {
  background-color: honeydew;
  padding: 8px;
  border: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}
</style>
