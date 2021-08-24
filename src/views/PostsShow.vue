<template>
  <div class="posts-show" id="show">
    <h1>Showing you Post</h1>
    <hr>
    <h3>title: {{ post.title }}</h3>
    <h3>user: {{ post.user.name }}</h3>
    <h3>comment: {{ post.comment }}</h3>
    <h3>high score: {{ post.high_score }}</h3>
    <h3>address: {{ post.address }}</h3>
    <router-link v-if="post.user_id == $parent.getUserId()" v-bind:to="`/posts/${post.id}/edit`"><button>Edit</button></router-link>
    <router-link v-bind:to="`/PostsIndex`"><button>Return to posts</button></router-link>
    <button v-if="post.user_id == $parent.getUserId()" v-on:click="postDelete()">Delete this post</button>
  </div>
</template>

<style>
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the show!",
      post: {},
      favoritePosts: [],
    };
  },
  created: function () {
    this.postShow();
  },
  methods: {
    postShow: function () {
      console.log(this.$route);
      // get data from rails
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
    postDelete: function () {
      axios.delete(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push;
        this.$router.push("/PostsIndex");
      });
    },
    postEdit: function () {
      axios.update(`/posts/${this.$route.params.id}/edit`).then((response) => {
        console.log(response.data);
      });
    },

    getUserId: function () {
      console.log(this.$route);
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log("resonse.data");
        this.post = response.data;
      });
    },
    favoritePost: function () {
      console.log(this.$route);
      axios.post(`/favorites/posts`, this.newFavoritePost).then((response) => {
        console.log("response.data");
        this.favoritePosts.push(this.post);
        this.post = response.data;
      });
    },
  },
};
</script>