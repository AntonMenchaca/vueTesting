<template>
  <div className="search">
    <button
    name="All Movies"
      v-if="this.showFaves === true"
      @click="$emit('handle-show-faves', this.showFaves)"
    >
      Show All Movies
    </button>
    <button name="Show Favorites" v-else @click="$emit('handle-show-faves', this.showFaves)">
      Show Favorites
    </button>
    <br /><br />
    <select v-model="selected">
      <option value="" selected disabled hidden>Choose a Genre</option >
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">
        {{ genre.name }}
      </option>
    </select>
    <br /><br />
    <button name="Search" @click="$emit('handle-genre-change', this.selected)">Search</button>
  </div>
</template>

<script>
export default {
  name: "Search",

  props: {
    genres: Array,
    showFaves: Boolean,
  },
  data: function () {
    return {
      selected: "",
    };
  },
};
</script>

<style>
.search {
  top: 100px;
  flex-basis: 20%;
  min-width: 200px;
  position: sticky;
  padding: 20px;
  background-color: #7c3302;
  z-index: 2;
  text-align: center;
  font-size: 20px;
}

.search > button {
  font-size: 20px;
  padding: 10px;
}

.search > select {
  font-size: 20px;
  padding: 10px;
}
</style>
