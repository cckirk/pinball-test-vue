<template>
  <div class="home">
    <!-- <h1>{{ posts }}</h1> -->
    <div id="container">
      <a href="../views/posts/PostsCreate"><button>Post about a Pinball Machine</button></a>
      <hr>
      <div v-for="post in posts" v-bind:key="post.id">
        <p>{{ post.title }}</p>
        <a v-bind:href="`posts/${post.id}`">View Details</a>
        <hr>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the index page!",
      posts: [],
    };
  },
  created: function () {
    this.PostsIndex();
  },
  methods: {
    PostsIndex: function () {
      console.log("in index posts");
      axios.get("/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>