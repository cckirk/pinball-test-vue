<template>
  <div class="logout">
    <h1> You have Logged out</h1>
    <button v-on:click="loginRoute()">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: function () {
    console.log("in logout");
    delete axios.defaults.headers.common["Authorization"];
    localStorage.setItem("jwt");
    localStorage.removeItem("user_id");
  },
  methods: {
    loginRoute: function () {
      console.log("returning to login");
      this.$router.push("/login");
    },
  },
};
</script>