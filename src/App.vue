<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/buy">Buy</router-link> |
      <router-link to="/tickets">Tickets</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  a {
    text-decoration: none;
  }

}
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-self: flex-end;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
