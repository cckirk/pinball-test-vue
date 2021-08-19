<template>
  <div class="posts" id="posts">
    <a href="../posts/create"><button>Post about a Pinball Machine</button></a>
    <hr>
    Filter: <input type="Text" v-model="search" placeholder="search Post Titles"/>
    <button v-on:click="filter">Filter</button>
    <div v-for="post in filterBy(posts, search)" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <a v-bind:href="`posts/${post.id}`">View Details</a> |
      <router-link v-if="post.user_id == $parent.getUserId()" v-bind:to="`/posts/${post.user_id}`">View Your Post</router-link>
      <hr>
    </div>
    <div  v-for="user in users" v-bind:key="user.id">
      <h3>{{ user.name }}</h3>
    </div>|
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to the index page!",
      posts: [],
      users: [],
      filteredPosts: [],
      search: "",
      favoritePosts: [],
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
      axios.get(`/users/${this.$route.params.name}`).then((response) => {
        console.log("resonse.data");
        this.user = response.data;
      });
    },
    filter: function () {
      console.log(this.search);
      this.filteredPosts = [];
      this.posts.forEach((post) => {
        if (post.title.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredPosts.push(post);
        }
      });
    },
  },
};
</script>