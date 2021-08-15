<template>
  <div class="posts-show">
    <h1>id: {{ post.id }}</h1>
    <h1>title: {{ post.title }}</h1>
    <h1>comment: {{ post.comment }}</h1>
    <h1>high score: {{ post.high_score }}</h1>
    <router-link v-if="post.user_id == $parent.getUserId()" v-bind:to="`/posts/${post.id}`">Edit</router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the show!",
      post: {},
    };
  },
  created: function () {
    this.postShow();
  },
  methods: {
    postShow: function () {
      console.log("getting a single post");
      console.log(this.$route);
      // get data from rails
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
    postDelete: function () {
      console.log("destroying post");
      axios.delete(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push;
      });
    },
    getUserId: function () {
      console.log("getting user_id");
      console.log(this.$route);
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log("resonse.data");
        this.post = response.data;
      });
    },
  },
};
</script>