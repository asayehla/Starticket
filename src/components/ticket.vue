<template>
<article class="ticket">
  <div class="what">
    <h1>{{ticket.event.name}}</h1>
  </div>

  <div class="where">
    <h3>{{ticket.event.where.venue}}</h3>
    <p>{{ticket.event.where.adress}}</p>
  </div>

  <div class="when">
    <p>WHEN</p>
    <h4>{{ticket.event.when.date}}</h4>
  </div>

  <div class="from">
    <p>FROM</p>
    <h4>{{ticket.event.when.from}}</h4>
  </div>

  <div class="to">
    <p>TO</p>
    <h4>{{ticket.event.when.to}}</h4>
  </div>

  <div class="info">
    <p>INFO</p>
    <h5>{{ticket.event.info}}</h5>
  </div>

  <div class="barcode">
    {{ticket.event.code}}
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
    margin: 1.8rem;
    background:rgb(217, 217, 217);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "what what what" "where where where" "when from to" "info info info" "barcode barcode barcode";
}

.what {
    grid-area: what;
}

.where {
    grid-area: where;
    border-bottom: 2px dotted black;
}

.when {
    grid-area: when;
}

.from {
    grid-area: from;
}

.to {
    grid-area: to;
}

.info {
    grid-area: info;
}

.barcode {
    grid-area: barcode;
    padding: 0.3rem 0;
}
</style>
