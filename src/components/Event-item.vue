<template lang="html">
  <article class="event-item">
    <section class="date">
      <h1>{{ticket.when.date}}</h1>
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
    border: green 2px solid;
    padding: 0;
}
.event-item {
    border: 1px solid #eee;
    border-radius: 3px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin:1rem;

    h1 {
        font-size: 2rem;
    }
    h2 {
        padding: 0;
    }
    p {
        font-size: 1rem;
        text-align: left;
        margin: 0 1rem;
    }

}
</style>
