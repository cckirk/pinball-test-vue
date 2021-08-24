<template>
  <div class="regions-show" id="header">
     <h1>{{ message }}</h1>
    Search by State or Country: <input type="Text" v-model="search" placeholder="State/Country"/>
    <div id="regions"
      v-for="region in filterBy(regions, search)"
      v-bind:key="region.id">
      <h3>{{ region.state }}</h3>
      <router-link v-bind:to="`/locations/${region.name}`"><h4>{{ region.full_name }}</h4></router-link>
    </div>
  </div>
</template>
<style>
#regions {
  text-align: center;
}
#header {
  text-align: center;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Showing you all Regions",
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
      console.log(this.$route);
      // get data from rails
      axios.get(`/regions/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.regions = response.data;
      });
    },
    regionIndex: function () {
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
