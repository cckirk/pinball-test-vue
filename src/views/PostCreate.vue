<template>
  <div class="post-create">
    <form v-on:submit.prevent="submit()">
      <h1>Make a new Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <label>Title/Theme:</label>
      <div>
        <input type="text" id="inputs" v-model="newPostParams.title" />
      </div>
      <label>Your Comment:</label>
      <div>
        <textarea id="inputs" rows="4" cols="40" type="text" v-model="newPostParams.comment" />
      </div>
      <label id="labels">Your High Score:</label>
      <div>
        <input type="text" id="inputs" v-model="newPostParams.high_score">
      </div>
      <label id="labels">Address of Machine:</label>
      <div>
        <input type="text" id="inputs" v-model="newPostParams.address">
      </div>  
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style>
#inputs {
  font-family: Arial, Helvetica, sans-serif;
}
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
          this.$router.push("/PostsIndex");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
