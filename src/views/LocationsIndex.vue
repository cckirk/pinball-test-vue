<template>
  <div class="locations">
    <a href="/regions"><button>Return to regions</button></a>
    <div v-for="location in region.locations" v-bind:key="location.id">
      <h1>name: {{ location.name }}</h1>
      <h1>address: {{ location.street }}</h1>
      <h1>city: {{ location.city }}</h1>
      <h1>zip: {{ location.zip }}</h1>
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
      region: {},
    };
  },
  created: function () {
    this.LocationsIndex();
  },
  methods: {
    LocationsIndex: function () {
      console.log("in index locations");
      axios.get(`http://localhost:3000/locations?region=${this.$route.params.region}`).then((response) => {
        console.log(response.data);
        this.region = response.data;
      });
    },
  },
};
</script>
