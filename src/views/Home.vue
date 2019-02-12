<template lang="html">
  <main id="home">
    <section>
      <img src="https://placekitten.com/200/200" alt="Logo" @click="$router.push('/events')">
    </section>
    <section>
      <a href="#" class="btn" @click="$router.push('/events')">Go to Events!</a>
    </section>
  </main>
</template>

<script>
export default {
  name: 'startpage'
}
</script>

<style lang="scss">

#home {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  section {
    flex: 1;
  }

}





</style>
