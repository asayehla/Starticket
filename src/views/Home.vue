<template lang="html">
  <main id="home">
    <section>
      <img src="https://placekitten.com/300/300" alt="Logo" @click="$router.push('/events')">
    </section>
    <section>
      <a href="#" @click="$router.push('/events')"><h1>Go to Events!</h1></a>
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
  display: flex;
  flex-direction: column;
  padding-top: 7rem;

  section {
    flex: 1;
    @extend %center;
  }
  h1 {
    padding-top: 3rem;
    // font-size: 3rem;
    // color: rgb(107,51,101);
    // font-weight: bold;
    // text-shadow: -2px 2px 0px rgba(0, 0, 0, 1);
  }
  img {
    width: 16rem;
  }
  &:last-child {
    align-items: flex-end;
    padding: 1rem;
  }

}

</style>
