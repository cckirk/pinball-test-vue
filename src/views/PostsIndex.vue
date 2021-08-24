<template>
  <div class="posts" id="posts">
    <h1>Share Posts About Pinball Machines</h1>
    <br>
    <a href="../posts/create"><button>Make a post</button></a>
    <hr>
    Search by Title Name, User or Address: <input type="Text" v-model="search" placeholder="search Post Titles"/>
    <div class="container gray-background">
      <div v-for="post in filterBy(posts, search)" v-bind:key="post.id">
        <div class="card border-secondary mb-3">
          <h2 class="card-header">{{ post.title }}</h2>
          <div class="card-body">
            <h4> User: {{ post.user.name }}</h4>
            <h4>Address: {{ post.address }}</h4>
            <a v-bind:href="`posts/${post.id}`" v-if="post.user.id != $parent.getUserId()">View Details</a> 
            <router-link v-if="post.user.id == $parent.getUserId()" v-bind:to="`/posts/${post.id}`">View Your Post</router-link>
            <hr>
          </div>
        </div>
      </div>
    </div>
    <div  v-for="user in users" v-bind:key="user.id">
      <h3>{{ user.name }}</h3>
    </div>
  </div>
</template>

<style>
#posts {
  text-align: center;
}
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
      regions: [],
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
    showUser: function () {
      console.log("showing you a user");
      axios.get(`/users/${this.$route.params.id}`).then((response) => {
        console.log("response.data");
        this.user = response.data;
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
    PostsDelete: function () {
      console.log("deleted this post");
      axios.delete(`/posts/${this.$route.params.id}`).then((response) => {
        console.log("response.data");
        this.post = response.data;
      });
    },
  },
};
</script>