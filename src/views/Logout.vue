<template>
  <div class="logout" id="logout">
    <h1> You have Logged out</h1>
    <button v-on:click="loginRoute()">Login</button>
  </div>
</template>

<style>
#logout {
  text-align: center;
}
</style>
<script>
import axios from "axios";
export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
  },
  methods: {
    loginRoute: function () {
      this.$router.push("/login");
    },
  },
};
</script>