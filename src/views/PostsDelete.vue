<template>
  <div id="delete-post">

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
    };
  },
  methods: {
    delete: function () {
      axios.delete();
    },
  },
};
</script>

