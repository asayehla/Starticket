<template lang="html">
  <article class="event-item" @click="selectEvent(event)">
    <section class="date">
      <h1>{{event.when.date}}</h1>
      <h6>{{event.when.year}}</h6>
    </section>
    <section class="nameVenue">
      <h2>{{event.name}}</h2>
      <p>{{event.where.venue}}</p>
      <p>{{event.when.from}} - {{event.when.to}}</p>
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
    border: rgb(217, 217,217) 1px solid;
    background-color: rgb(26, 9, 33);
    border-radius: 5px;
    padding: 0;

    h6 {
        margin: 0.1rem 0;
    }
}
.event-item {
    border-radius: 5px;
    display: grid;
    grid-template-columns: 25% 3fr 1fr;
    margin: 1rem;

    h1 {
        font-size: 1.1rem;
    }
    h2 {
        text-align: left;
        padding: 0.5rem;
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
    .nameVenue {
        border-bottom: 1px rgb(217, 217,217) solid;
    }
    .price {
        border-bottom: 1px rgb(217, 217,217) solid;

        h5 {

            text-align: right;
            padding: 0 0.2rem;
            margin-bottom: 0.2rem;
        }
        p {
            text-align: right;
            padding: 0 0.2rem;
            margin-bottom: 0.2rem;
        }
    }
}
</style>
