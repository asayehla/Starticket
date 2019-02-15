<template lang="html">
  <main>
    <section class="logo2">
      <img src="https://placekitten.com/100/100" alt="Logo" @click="$router.push('/events')">
      <h1>STAFF</h1>
    </section>
    <section>
      <img src="https://placekitten.com/200/200" class="ok" alt="ok /ej oki katt" @click="$router.push('/events')">
    </section>
    <section class="verify">
      <div class="barcode">
        69AF24
      </div>
      <a href="#" class="btn"><h2>Verify ticket</h2></a>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../scss/components';

section {
    margin: 1rem;
    padding-top: 1rem;
}

.verify {
    border: black 2px solid;
}

.logo2 {
    margin-top: 3rem;
}

.ok {
    margin-bottom: 3rem;
    border-radius: 50%;
}

</style>
