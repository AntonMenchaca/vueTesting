<template>
  <div className="search">
    <button v-if="faves === true" @click="handleShowFavorites">
      Show Favorites
    </button>
    <button v-else @click="handleShowFavorites">Show All Movies</button>
    <br /><br />
    <select @change="handleGenreChosen">
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">
        {{ genre.name }}
      </option>
    </select>
    <br /><br />
    <button>Search</button>
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
      faves: this.showFaves,
    };
  },

  methods: {
    handleShowFavorites: function () {
      this.faves = !this.faves;
    },
    handleGenreChosen: function () {},
  },
};
</script>

<style>
.search {
  flex-basis: 20%;
  min-width: 200px;

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
