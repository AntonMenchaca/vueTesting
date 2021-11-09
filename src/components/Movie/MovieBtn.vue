<template>
    <button v-if="isFavorited">Remove Favorite</button>   
    <button v-else>Add Favorite</button>   
</template>

<script>
export default {
    name: "MovieBtn",
    props: {
    isFavorited: Boolean,
  },
}
</script>
