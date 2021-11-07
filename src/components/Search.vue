<template>
  <div className="search">
    <button></button>
    <br /><br />

    <select onChange="{this.filterGenre}">
      <!-- { this.state.genres.map((genre) => (
          <option  value={genre.id}>{genre.name}</option>
        ))} -->
    </select>
    <br /><br />

    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data: function () {},
};
</script>

<style></style>
