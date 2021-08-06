<template>
  <div class="regions-show">
     <h1>{{ message }}</h1>
     <h4>Regions: {{ regions.name }}</h4>
  </div>
</template>
<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Showing you Regions",
      regions: {},
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
        this.post = response.data;
      });
    },
    regionIndex: function () {
      console.log("showing all regions");
      console.log(this.$route);
      // get data from rails
      axios.get(`/regions`).then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
  },
};
</script>
