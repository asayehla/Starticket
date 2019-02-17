<template>
<div id="app">
  <transition name="fade">
    <router-view />
  </transition>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/events">Events</router-link> |
    <router-link to="/buy">Buy</router-link> |
    <router-link to="/tickets">Tickets</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',

  //before the page load this function connects to store, gets API.
  beforeMount() {
    this.$store.dispatch('getEvents');
  }
}
</script>

<style lang="scss">
@import 'scss/main';

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
