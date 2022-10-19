<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
         <img src="@/assets/logo.png" width="50" height="50" class="d-inline-block align-mid" alt="">Gameroo
      </a>
        <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarToggler" 
        aria-controls="navbarToggler" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link> 
            </li>
            <li v-if="!store.currentUser" class="nav-item">
               <router-link to="/login" class="nav-link">Login</router-link> 
            </li>
             <li class="nav-item">
              <router-link to="/signup" class="nav-link">Signup</router-link> 
             </li>
             <li class="nav-item">
              <a href="#" @click="logout()" class="nav-link">Logout</a>
             </li>
             <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
          </ul>
           <form class="form-inline ms-auto my-lg-2">
          <input v-model="store.searchTerm" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          
          </form>
        </div>
      </nav>
      <div class="container">
      <router-view/>
      </div>
    </div>
  </template>

<script>
import store from '@/store.js';
import {firebase} from "@/firebase";

firebase.auth().onAuthStateChanged((user) => {
 if (user) {
 // User is signed in.
 console.log('*** User', user.email);
 store.currentUser = user.email;
 } else {
 // User is not signed in.
 console.log('*** No user');
 store.currentUser = null;
 }
});

export default{
  name: 'app',
  data() {
    return {
       store,
       };
  },
    methods:{
      logout(){
        firebase.auth().signOut().then(() => {
          this.$router.push ({ name: "Login" });
        });
      },
    },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #94a987!important;
}
.btn-primary{
  background-color: #60662d94 !important;
}
nav {
  padding: 30px;
  background-color: #92a188 !important;
 .form-control{
  background-color:white !important;
 }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
