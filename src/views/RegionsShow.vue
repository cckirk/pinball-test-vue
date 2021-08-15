<template>
  <div class="regions-show">
     <h1>{{ message }}</h1>
    Filter: <input type="Text" v-model="search" placeholder="search regions"/>
    <div id="regions"
      v-for="(regions, index) in regions.regions"
      v-bind:key="index.id">
      <h3>{{ regions.state }}</h3>
      <router-link v-bind:to="`/locations/${regions.name}`"><h4>{{ regions.full_name }}</h4></router-link>
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
        console.log(response.data);
        this.regions = response.data;
      });
    },
  },
  computed: {
    filteredRegions: function () {
      return this.regions.filter((region) => {
        return region.name.match(this.search);
      });
    },
  },
};
</script>
