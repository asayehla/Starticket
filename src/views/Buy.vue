<template>
  <main id="buy">
  <section>
    <h2 class="intro">Let's buy some tickets!</h2>
  </section>
  <section>
    <h1>Konsertnamn</h1>
    <h3>datum tid</h3>
    <p>plats</p>
  </section>
  <section>
    <div class="grid">
      <div class="big">
        <p>pris</p>
      </div>
      <div class="part1">
        <p>-</p>
      </div>
      <div class="part2">
        <p>antal</p>
      </div>
      <div class="part3">
        <p>+</p>
      </div>
    </div>
  </section>
<a href="#" class="btn" @click="$router.push('/tickets')">Take my money!</a>
</main>
</template>

<script>

</script>

<style lang="scss">
@import '../scss/components';
.grid {
  border: 2px solid white;
  display: grid;
  margin:10% 20%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
  "big big big"
  "part1 part2 part3"
  }

  .part1 {
    grid-area: part1;
    background: khaki;
    padding: .3rem;
  }
  .part2 {
    grid-area: part2;
    background: red;
    padding: .3rem;
  }
  .part3 {
    grid-area: part3;
    background: peachpuff;
    padding: .3rem;
  }
  .big {
    grid-area: big;
    background: rebeccapurple;
    padding: .3rem;
  }





</style>
