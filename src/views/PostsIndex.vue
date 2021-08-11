<template>
  <div class="home">
    <!-- <h1>{{ posts }}</h1> -->
    <div v-for="post in posts" v-bind:key="post.id">
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</p>
      <p>{{ post.comment }}</p>
      <p>{{ post.high_score }}</p>
      <p>{{ post.address }}</p>
      <hr>
      <a v-bind:href="`posts/${post.id}`">1</a>
    </div>
  </div>
</template>

<style></style>

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