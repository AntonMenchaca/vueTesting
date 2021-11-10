<template>
    <button  name="Remove Favorite" v-if="isFavorited === true" @click="onRemoveClick(isFavorited, movie)">Remove Favorite</button>   
    <button name="Add Favorite" v-else @click="onFavoriteClick(isFavorited, this.movie._id)">Add Favorite</button>   
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
          console.log(currentMovieID)
          this.$emit('handle-remove-click',boolFavorited, currentMovieID)
      },
      onFavoriteClick(boolFavorited, currentMovie) {
          console.log(currentMovie)
           this.$emit('handle-favorite-click', boolFavorited, currentMovie)
      }
  }
}
</script>
