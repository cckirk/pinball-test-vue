<template>
  <div class="edit">
    <h1>Edit:</h1>
    <div>
      <label>Title:</label>
      <input type="text" v-model="editpostParams.title" />
    </div>
    <label>Comment:</label>
    <div>
      <textarea rows="4" cols="40" type="text" v-model="editpostParams.comment" />
    </div><div>
      <label>High Score:</label>
      <input type="text" v-model="editpostParams.high_score" />
    </div><div>
      <label>Address:</label>
      <input type="text" v-model="editpostParams.address" />
    </div>
    <button v-on:click="submit()">submit</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: [],
      editpostParams: {},
    };
  },
  created: function () {
    this.postShow();
  },
  methods: {
    submit: function () {
      axios.patch(`/posts/${this.$route.params.id}`, this.editpostParams);
      this.$router.push("/PostsIndex");
    },
    postShow: function () {
      console.log("getting a single post");
      console.log(this.$route);
      // get data from rails
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.post = response.data;
        this.editpostParams = this.post;
      });
    },
  },
};
</script>
