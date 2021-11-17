<template>
    <button  name="Remove Favorite" v-if="isFavorited == true && showFaves === true" @click="onRemoveClick(isFavorited, movie)">Remove Favorite</button>   
    <button name="Add Favorite" v-else-if="isFavorited == false" @click="onFavoriteClick(isFavorited, this.movie._id)">Add Favorite</button>
    <h3 v-else>Added To Favorites!</h3>   
</template>

<script>
export default {
    name: "MovieBtn",
    props: {
    showFaves: Boolean,
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

<style scoped>
button {
    width: 35%;
}
</style>