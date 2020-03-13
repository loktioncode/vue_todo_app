<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div>

    <router-view/> <!-- this is where component will be displayed wen route is clicked -->
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 40px;
  color: #2c3e50;
}

#nav {
  padding-left: 5em;
}

#nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(136, 118, 153);
  font-weight: bold;
  margin-right: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
