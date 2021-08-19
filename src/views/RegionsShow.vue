<template>
  <div class="regions-show">
     <h1>{{ message }}</h1>
    Filter: <input type="Text" v-model="search" placeholder="search State or Country"/>
    <button v-on:click="filter">Filter</button>
    <div id="regions"
      v-for="region in filteredRegions"
      v-bind:key="region.id">
      <h3>{{ region.state }}</h3>
      <router-link v-bind:to="`/locations/${region.name}`"><h4>{{ region.full_name }}</h4></router-link>
    </div>
  </div>
</template>
<style>
#regions {
  line-height: 1;
  text-align: center;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Showing you Regions",
      regions: {},
      search: "",
      filteredRegions: {},
    };
  },
  created: function () {
    this.regionShow();
    this.regionIndex();
  },
  methods: {
    regionShow: function () {
      console.log("showing a single region");
      console.log(this.$route);
      // get data from rails
      axios.get(`/regions/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.regions = response.data;
      });
    },
    regionIndex: function () {
      console.log("showing all regions");
      console.log(this.$route);
      // get data from rails
      axios.get(`/regions`).then((response) => {
        console.log(response.data.regions);
        this.regions = response.data.regions;
        this.filteredRegions = this.regions;
      });
    },
    filter: function () {
      console.log(this.search);
      this.filteredRegions = [];
      this.regions.forEach((region) => {
        if (region.state.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredRegions.push(region);
        }
      });
    },
  },
};
</script>
