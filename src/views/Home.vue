<template lang="html">
  <main id="home">
    <section>
      <img src="/starticketlogo.png" alt="Logo" @click="$router.push('/events')">
    </section>
    <section>
      <a href="#" @click="$router.push('/events')"><h1>Go to Events!</h1></a>
    </section>
    <section>
      <a href="#" class="btn" @click="$router.push('/tickets')"><h2>view your Tickets</h2></a>

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
            margin-bottom: 1rem;
        }
    }
    img {
        margin-top: 4rem;
        width: 12rem;

    }
}
</style>
