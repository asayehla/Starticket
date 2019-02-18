<template lang="html">
  <article class="event-item" @click="selectEvent(event)">
    <section class="date">
      <h1>{{event.when.date}}</h1>
      <h6>{{event.when.year}}</h6>
    </section>
    <section class="info">
      <h2>{{event.name}}</h2>
      <p>Place:{{event.where}}</p>
      <p>From:{{event.when.from}}</p>
      <p>To:{{event.when.to}}</p>
    </section>
    <section class="price">
      <h3>{{event.price}}:-</h3>
    </section>
  </article>
</template>

<script>
export default {
  name: 'event',
  props: ['event'],
  methods: {
    selectEvent(event) {
      this.$store.commit('selectEvent', event);
      $router.push('/buy');
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
      }
}

</style>
