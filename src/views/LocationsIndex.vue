<template>
  <div="locations">
    <div v-for="location in region.locations" v-bind:key="location.id">
      <h1>id: {{ location.id }}</h1>
      <h1>address: {{ location.street }}</h1>
      <h1>name: {{ location.name }}</h1>
      <h1>city: {{ location.city }}</h1>
      <h1>zip: {{ location.zip }}</h1>
      <h1>posts: {{ location.post }}</h1>
      <br>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      locations: {},
    };
  },
  created: function () {
    this.LocationsIndex();
  },
  methods: {
    LocationsIndex: function () {
      console.log("in index locations");
      axios.get(`${this.$route.params.name}/locations`).then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
