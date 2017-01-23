<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Twitter</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"><router-link to="/home">Home</router-view></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Notifications</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Messages</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div class="row">
      <div class="col-sm-3">
      </div>
      <div class="col-sm-6">
        <router-view></router-view>
      </div>
      <div class="col-sm-3">

      </div>
    </div>
  </div>
</template>

<script>
import Account from './components/Account.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Account,
    Home
  }
}
</script>

<style>
  .row {
    margin-top: 20px;
  }
</style>
