<template>
  <div className="video-player">
    <div className="embed-responsive">
      <iframe
        className="embed-responsive-item"
        :src="'https://www.youtube.com/embed/' + video"
        allowFullScreen
      ></iframe>
    </div>
    <div className="video-player-details">
      <h2>{{ title }}</h2>
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
.embed-responsive {
  width: 100vw;
}
.video-player {
  display: flex;
  flex-direction: column;
}
iframe {
  width: 100%;
  height: 60vh;
}

.video-player-details {
  background-color: honeydew;
  padding: 8px;
  border: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}
</style>
