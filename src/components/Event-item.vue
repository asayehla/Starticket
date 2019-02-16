<template lang="html">
  <article class="event-item">
    <section class="date">
      <h1>{{ticket.when.date}}</h1>
      <h6>{{ticket.when.year}}</h6>
    </section>
    <section class="info">
      <h2>{{ticket.name}}</h2>
      <p>Place:{{ticket.where}}</p>
      <p>From:{{ticket.when.from}}</p>
      <p>To:{{ticket.when.to}}</p>
    </section>
    <section class="price">
      <h3>{{ticket.price}}:-</h3>
      <a href="#" class="btn">Köp!</a>
    </section>
  </article>
</template>

<script>
export default {
  name: 'eventItem',
  props: ['ticket'],
  methods: {
    addItem(item) {
      this.$store.commit('addItem', item);
    },

  },
}
</script>

<style lang="scss">
@import '../scss/components';

.date {
    border: white 1px solid;
    border-radius: 8px;
    padding: 0;
    background-color: rgb(26, 9, 33);

    h6 {
      margin: 0.3rem;
      color: white;
    }
}

.event-item {

    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin:1rem;
    background-color: rgb(109, 53, 104);

    h1 {
        font-size: 2rem;
        margin: 0.8rem 0.1rem 1.5rem 0.1rem;
    }
    h2 {
        text-align: left;
        margin: 0.7rem;
    }
    p {
        font-size: 1rem;
        text-align: left;
        margin: 0 0.7rem;
    }
    .price {
      padding: 0 0.7rem;
      margin-bottom: 0.4rem;
      .btn {
        border: 1px solid white;
      }
    }
}

</style>
