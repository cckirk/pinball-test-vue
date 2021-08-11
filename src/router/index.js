import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegionsIndex from "../views/RegionsShow.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Logout from "../views/Logout.vue";
import postsShow from "../views/PostsShow.vue";
import postsIndex from "../views/PostsIndex.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/PostsIndex",
    name: "PostsIndex",
    component: postsIndex,
  },
  {
    path: "/PostsShow",
    name: "PostsShow",
    component: postsShow
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/regions",
    name: "RegionsIndex",
    component: RegionsIndex,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
