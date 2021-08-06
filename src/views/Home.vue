<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="region in regions" v-bind:key="region.id"> {{ region.id }} </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      regions: ["ca-valley", "ca-central"],
    };
  },
  created: function () {},
  methods: {
    //regions index
    RegionsIndex: function () {
      axios.get("/regions").then((response) => {
        console.log(regions);
        console.log("regionsIndex", response);
        this.regions = response.data;
      });
    },
  },
};
</script>
