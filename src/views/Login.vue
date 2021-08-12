<template>
  <div class="login">
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <div>
      <label>Email:</label>
      <input type="email" v-model="newSessionParams.email" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="newSessionParams.password" />
    </div>
    <input v-on:click="submit()" type="submit" value="Submit" />
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = { email: this.newSessionParams.email, password: this.newSessionParams.password };
      axios
        .post("/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          console.log("loged in");
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/regions");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
