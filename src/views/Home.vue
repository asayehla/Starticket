<template lang="html">
  <main id="home">
    <section>
      <img src="https://placekitten.com/300/300" alt="Logo" @click="$router.push('/events')">
    </section>
    <section>
      <a href="#" @click="$router.push('/events')"><h1>Go to Events!</h1></a>
    </section>
    <section id="nav">
      <router-link to="/tickets">Go to Tickets!</router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
@import '../scss/components';

#home {
    display: grid;
    height: 100%;
    grid-template-rows: 1fr 2fr 1fr;

    section {

        &:last-child {
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
    }
    img {
        margin-top: 4rem;
        width: 12rem;
        border: white 2px solid;
        border-radius: 5px;
    }
}
</style>
