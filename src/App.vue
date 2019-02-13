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
@import 'scss/main';

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
