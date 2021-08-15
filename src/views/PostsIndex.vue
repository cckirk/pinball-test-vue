<template>
  <div class="home">
    <div id="container">
      <a href="../posts/create"><button>Post about a Pinball Machine</button></a>
      <hr>
      <div v-for="post in posts" v-bind:key="post.id">
          <h2>{{ post.title }}</h2>
          <div  v-for="user in users" v-bind:key="user.id">
            <h3>{{ user.name }}</h3>
          </div>
          <a v-bind:href="`posts/${post.id}`">View Details</a> |
          <router-link v-if="post.user_id == $parent.getUserId()" v-bind:to="`/posts/${post.user_id}`">View Your Post</router-link>
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
      users: [],
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
    getUserId: function () {
      console.log("getting user_id");
      console.log(this.$route);
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log("resonse.data");
        this.post = response.data;
      });
    },
    getUserName: function () {
      console.log("getting user_id");
      console.log(this.$route);
      axios.get(`/posts/${this.$route.params.name}`).then((response) => {
        console.log("resonse.data");
        this.post = response.data;
      });
    },
  },
};
</script>