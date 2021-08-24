<template>
  <div class="locations" id="locations-data">
     Search by Venue name, city, address, or zipcode: <input type="Text" v-model="search" placeholder="search by city/address/zip"/>
    <a href="/regions"><button id="return-button">Return to regions</button></a>
    <!-- <div v-for="location in filterBy(region.locations, "search address ex.(123 street.st)")" v-bind:key="location.id"> -->
    <!-- <div v-for="location in filterBy(region.locations, search)" v-bind:key="location.id"> -->
    <h1>Locations of Pinball Machines</h1>
    <hr/>
    <div v-for="location in filterBy(region.locations, search)" v-bind:key="location.id" >
      <h1>Venue: {{ location.name }}</h1>
      <h1>address: {{ location.street }}</h1>
      <h1>city: {{ location.city }}</h1>
      <h1>zip: {{ location.zip }}</h1>
      <button v-on:click="copy(location.street)">Copy Address</button>
      <hr/>
      <br>
    </div>
  </div>
</template>

<style>
#locations-data {
  text-align: center;
}
#return-button {
  position: relative;
}
#return-button {
  position: absolute;
  top: 57px;
  right: 10px;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      region: [],
      filteredLocations: [],
      search: "",
      favoriteLocations: [],
      location: [],
    };
  },
  created: function () {
    this.LocationsIndex();
  },
  methods: {
    // copy: function () {
    //   var str = location.getElementBy("street");
    //   window.getSelection().selectAllChildren(str);
    //   location.execCommand("Copy");
    // },
    LocationsIndex: function () {
      axios.get(`http://localhost:3000/locations?region=${this.$route.params.region}`).then((response) => {
        console.log(response.data);
        this.region = response.data;
      });
    },
    filter: function () {
      console.log(this.search);
      this.filteredLocations = [];
      this.region.locations.forEach((location) => {
        if (location.street.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredLocations.push(location);
        }
      });
    },
    saveToFavorites: function () {
      this.favorites.includes(this.location.name);
      console.log(this.favorites);
    },
  },
};
</script>
