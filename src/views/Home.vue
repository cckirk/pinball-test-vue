<template>
  <div class="home" id= "home-header">
    <h1>{{ message }}</h1>
    <div id="home body">
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<style>
@import url("http://fonts.cdnfonts.com/css/arcade-classic");
#home-header {
  text-align: center;
  font-family: "ArcadeClassic", sans-serif;
  letter-spacing: 1mm;
  word-spacing: 2mm;
  background-image: url("/Users/christopherkirkwood/Desktop/Actualize/pinball-test-vue/public/assets/download.jpeg");
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Pinball Machine Finder",
      info: "This application is intended to be used as a way for people to search for locally or regionally stored Pinball Machines and for people to share their experienes and scores with one another.",
      regions: ["ca-valley", "ca-central"],
    };
  },
  created: function () {},
  methods: {
    //regions index
    RegionsIndex: function () {
      axios.get("/regions").then((response) => {
        console.log("regionsIndex", response);
        this.regions = response.data;
      });
    },
  },
};
</script>
