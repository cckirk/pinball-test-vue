<template>
  <div id="app">
    <div class="d-flex" id="wrapper">
            <!-- Sidebar-->
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">Pinball Machine Finder</div>
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/favorites">Favorites</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/regions">Regions</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/login">Login</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/logout">Logout</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/signup">Sign up</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/PostsIndex">Posts about pinball</a>
                    <a class="list-group-item p-3" href="/"></a>
                </div>
            </div>
            <!-- Page content wrapper-->
            <div id="page-content-wrapper">
                <!-- Top navigation-->
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        <button class="btn btn-primary" id="sidebarToggle"><span class="navbar-toggler-icon"></span></button>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="/regions">Find a Pinball Machine</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- Page content-->
                <div class="container-fluid">
                        <router-view />
                </div>
            </div>
        </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

