<template>
<main id="buy">
  <section>
    <h2 class="intro">Let's buy some tickets!</h2>
  </section>
  <section>
    <h1>{{event.name}}</h1>
    <h3>Date: {{event.when.date}}</h3>
    <p>From: {{event.when.year}}</p>
    <p>From: {{event.when.from}}</p>
    <p>To: {{event.when.to}}</p>
    <p>Where: {{event.where.adress}} </p>
    <p>Info: {{event.where.venue}}</p>
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
import ticket from '@/components/event-item';

export default {
  name:'event',
  components: {
        event
  },
  methods: {

  },
  computed: {
    event() {
      return this.$store.state.events;
    }
  }
}
</script>

<style lang="scss">
@import '../scss/components';
.grid {
    border: 2px solid white;
    display: grid;
    margin: 10% 20%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "big big big" "part1 part2 part3";
}

.part1 {
    grid-area: part1;
    background: khaki;
    padding: 0.3rem;
}
.part2 {
    grid-area: part2;
    background: red;
    padding: 0.3rem;
}
.part3 {
    grid-area: part3;
    background: peachpuff;
    padding: 0.3rem;
}
.big {
    grid-area: big;
    background: rebeccapurple;
    padding: 0.3rem;
}
</style>
