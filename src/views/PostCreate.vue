<template>
  <div class="post-create">
    hello
    <form v-on:submit.prevent="submit()">
      <h1>Make a new Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newPostParams.title" />
      </div>
      <div>
        <label>Your Comment:</label>
        <input type="text" v-model="newPostParams.comment" />
      </div>
      <div>
        <label>Your High Score:</label>
        <input type="text" v-model="newPostParams.high_score">
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPostParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
