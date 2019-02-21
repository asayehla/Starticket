<template>
<article class="ticket">
  <div class="what">
    <p>WHAT</p>
    <h1>{{ticket.event.name}}</h1>
  </div>

  <div class="where">
    <p>WHERE</p>
    <h3>{{ticket.event.where.venue}}</h3>
    <h5>{{ticket.event.where.adress}}</h5>
  </div>

  <div class="when">
    <p>WHEN</p>
    <h3>{{ticket.event.when.date}}</h3>
  </div>

  <div class="from">
    <p>FROM</p>
    <h3>{{ticket.event.when.from}}</h3>
  </div>

  <div class="to">
    <p>TO</p>
    <h3>{{ticket.event.when.to}}</h3>
  </div>

  <div class="infoticket">
    <p>INFO</p>
    <p>{{ticket.event.info}}</p>
  </div>

  <div class="barcode">
    {{ticket.code}}
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
    margin: 2rem;
    background: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "what what what"
     "where where where"
     "when from to"
     "info info info"
     "barcode barcode barcode";
    color: rgb(18, 17, 59);
    border-radius: 5px;
    box-shadow: 5px 5px 0 0 rgb(153, 127, 171),
     10px 10px 0 0 rgb(103, 51, 121),
     5px 5px 0 5px rgba(0,0,0,0);

    .what {
        grid-area: what;
        border-bottom: 1px dotted rgb(18, 17, 59);
    }

    .where {
        grid-area: where;
        border-bottom: 1px dotted rgb(18, 17, 59);
    }

    .when {
        grid-area: when;
    }

    .from {
        grid-area: from;
        border-left: 1px dotted rgb(18, 17, 59);
        border-right: 1px dotted rgb(18, 17, 59);
    }

    .to {
        grid-area: to;
    }

    .infoticket {
        grid-area: info;
        border-top: 1px dotted rgb(18, 17, 59);
        border-bottom: 1px dotted rgb(18, 17, 59);
    }

    .barcode {
        grid-area: barcode;
        padding: 1rem 1rem 1rem 0;
    }

    p {
        font-size: 0.8rem;
        text-align: left;
        margin: 0.8rem 1rem;
    }

    h1 {
        font-size: 2.3rem;
        margin: 0.8rem 0;
    }

    h3 {
        text-align: left;
        margin: 0.8rem 1rem;
    }
    h5 {
        text-align: left;
        margin: 1rem;
    }

}
</style>
