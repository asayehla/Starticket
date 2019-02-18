<template>
    <article class="ticket">
      <div class="what">
        <h1>{{ticket.event.name}}</h1> <!--byt ut till {{ticket.event.name}}-->
      </div>

      <div class="where">
        <h2>Where - city</h2>
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
        <h5>sittplats m.m.</h5>
      </div>
          
      <div class="barcode">
        15GS5W
      </div>
    </article>
</template>

<script>
export default {
    name: 'ticket',
    props: ['ticket']
}
</script>

<style lang="scss">

.ticket {
  max-width: 100%;
  margin: 1.2em;
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
    background: rgb(247, 242, 221);
  }
  .where {
    grid-area: where;
    border-bottom: 2px dotted black;
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
    background:rgb(247, 242, 221);
  }
  .barcode {
    grid-area: barcode;
    background: rgb(247, 242, 221);
    padding: 0.3rem 0;
  }


</style>