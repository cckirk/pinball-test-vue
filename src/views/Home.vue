<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="region in regions" v-bind:key="region.id"></div>
  </div>
</template>

<style></style>

<script>
import regions from "https://pinballmap.com/api/v1/docs/1.0/regions/index.json";
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      regions: regions.name,
    };
  },
  created: function () {},
  methods: {
    //regions index
    index: function () {
      axios.get("https://pinballmap.com/api/v1/docs/1.0/regions/index.json").then((response) => {
        console.log(regions);
        console.log("regionsIndex", response);
        this.regions = response.data;
      });
    },
  },
};
</script>
