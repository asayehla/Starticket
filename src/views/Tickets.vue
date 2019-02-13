<template lang="html">
<main id="tickets">

<article class="ticket">

  <div class="what">
    <h1> Name of event</h1>
  </div>
  <div class="where">
    <h2>Where</h2>
    <p>Exakt address</p>
  </div>


    <div class="when">
      <p>when</p>
      <h3>datum</h3>
    </div>
    <div class="from">
      <p>from</p>
      <h3>tid</h3>
    </div>
    <div class="to">
      <p>to</p>
      <h3>tid</h3>
    </div>


  <div class="info">
    <p>info</p>
    <h5>sittplats</h5>
  </div>
  <div class="barcode">
    //Barcode
  </div>

</article>

</main>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../scss/components';

.ticket {
  max-width: 17rem;

  background: red;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
  "what what what"
  "where where where"
  "when from to"
  "info info info"
  "barcode barcode barcode"
  }
  .what {
    grid-area: what;
    background: khaki;
  }
  .where {
    grid-area: where;
    background:purple;
  }
  .when {
    grid-area: when;
    background:blue;
  }
  .from {
    grid-area: from;
    background:red;
  }
  .to {
    grid-area: to;
    background:green;
  }
  .info {
    grid-area: info;
    background:gray;
  }
  .barcode {
    grid-area: barcode;
    background: yellow;
  }



</style>
