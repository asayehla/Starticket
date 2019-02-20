<template lang="html">
  <article class="event-item" @click="selectEvent(event)">
    <section class="date">
      <h1>{{event.when.date}}</h1>
      <h6>{{event.when.year}}</h6>
    </section>
    <section class="info">
      <h2>{{event.name}}</h2>
      <p>Place: {{event.where.venue}}</p>
      <p>From: {{event.when.from}}</p>
      <p>To: {{event.when.to}}</p>
    </section>
    <section class="price">
      <h5>{{event.price}}</h5><p>SEK</p>
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
      this.$router.push('/buy');
    }
  }
}
</script>

<style lang="scss" >
@import '../scss/components';

.date {
    border: white 1px solid;
    border-radius: 8px;
    padding: 0;
    background-color: rgb(26, 9, 33);

    h6 {
        margin: 0.1rem;
        color: white;
    }
}

.event-item {
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin: 1rem;
    background-color: rgb(109, 53, 104);

    h1 {
        font-size: 1.4rem;
        margin: 0.8rem 0.1rem 1.5rem;
    }
    h2 {
        text-align: left;
        padding: 0.3rem 0.4rem 0.1rem 0.5rem;
        margin: 0;
    }
    p {
        font-size: 0.9rem;
        text-align: left;
        padding: 0 0 0 0.5rem;
        margin: 0;

        &:last-child {
            padding-bottom: 0.1rem;
        }

    }
    .price {
        h5 {
            padding: 0 0.7rem;
            margin-bottom: 0.4rem;
        }
        p {
            text-align: center;
            padding: 0 0.7rem;
            margin-bottom: 0.4rem;
        }
    }
}
</style>
