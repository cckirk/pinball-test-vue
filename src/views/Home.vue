<template>
  <div class="home" id= "home-header">
    <h1>{{ message }}</h1>
    <p>{{ info }}</p>
    <img src="https://cdn.shopify.com/s/files/1/0281/8056/products/4641_PlanToys_PINBALL_Game_and_Puzzles_Concentration_Coordination_Logical_Social_Language_and_Communications_Problem_Solving_3yrs_Wooden_toys_Education_toys_Safety_Toys_Non-toxic_0_540x.png?v=1624394941">
    <div id="footer">
      <p>If You would like to make a post on the message board, Please make an account or Login</p>
      <a href="/login"><button>Login</button></a>
      <a href="/signup"><button>Sign Up</button></a>

    </div>
  </div>
</template>

<style>
@import url("http://fonts.cdnfonts.com/css/arcade-classic");
body {
  background-color: gray;
  background-size: cover;
  text-align: center;
  font-family: "ArcadeClassic", sans-serif;
  word-spacing: 2mm;
}
#home-header {
  text-align: center;
  font-family: "ArcadeClassic", sans-serif;
  letter-spacing: 1mm;
}
footer {
  background-color: black;
  text-decoration: white;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to the Pinball Machine Finder",
      info: "This application is intended to be used as a way for people to search for locally or regionally sourced Pinball Machines and for people to share their",
    };
  },
};
</script>
