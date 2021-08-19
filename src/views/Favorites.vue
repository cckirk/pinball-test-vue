<template>
  <div class="favorites">

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favoritePosts: [],
      favoriteLocations: [],
    };
  },
  methods: {
    favoritePostsIndex: function () {
      console.log("in index favorite posts");
      axios.get("/favorites/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
    favoriteLocationsIndex: function () {
      console.log("in index favorite locations");
      axios.get("/favorites/locations").then((response) => {
        console.log(response.data);
        this.locations = response.data;
      });
    },
  },
  created: function () {
    this.favoritePostsIndex();
    this.favoriteLocationsIndex();
  },
};
</script>
