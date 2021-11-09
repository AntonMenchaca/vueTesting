<template>
    <button v-if="isFavorited === true" @click="onRemoveClick(isFavorited, movie._id)">Remove Favorite</button>   
    <button v-else @click="onFavoriteClick(isFavorited, movie)">Add Favorite</button>   
</template>

<script>
export default {
    name: "MovieBtn",
    props: {
    isFavorited: Boolean,
    movie: Object
  },

  methods: {
      onRemoveClick(boolFavorited, currentMovieID) {
          this.$emit('handle-remove-click',boolFavorited, currentMovieID)
      },
      onFavoriteClick(boolFavorited, currentMovie) {
           this.$emit('handle-favorite-click', boolFavorited, currentMovie)
      }
  }
}
</script>
