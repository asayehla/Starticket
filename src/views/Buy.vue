<template>
  <main id="buy">
    <section v-if="event">
      <h4 class="intro">Let's buy some tickets!</h4>
    </section>
    <section class="soldOut" v-if='!works'>
      <h1>Sold out, try a lower amount of tickets</h1>
    </section>
    <section v-if='works'>
      <h1>{{event.name}}</h1>
      <h3>
        {{event.when.date}}  {{event.when.from}} - {{event.when.to}}
      </h3>
      <h6>{{event.when.year}}</h6>
    </section>
    <section class="Information" v-if='works'>
      <h2>@: {{event.where.venue}} - {{event.where.adress}} </h2>
      <p class="information">Information:</p>
      <p>{{event.info}}</p>
      <p class="sold">Tickets available still: {{event.tickets.available - event.tickets.sold}}</p>
    </section>
    <section>
      <div class="grid">
        <div class="big">
          <p>{{event.price * amount}}</p>
        </div>
        <div class="part1" @click="amount--">
          <p>-</p>
        </div>
        <div class="part2">
          <p>{{amount}}</p>
        </div>
        <div class="part3" @click="amount++">
          <p>+</p>
        </div>
      </div>
    </section>
    <a href="#" class="btn" @click="buy">Take my money!</a>
  </main>
</template>

<script>
export default {
  name: 'buy',
  data() {
    return {
      amount: 1,
      works: true
    }
  },
  components: {

  },
  methods: {
    buy() {
      if (this.amount > this.event.tickets.available - this.event.tickets.sold) {
        this.works = false;
      } else {
        this.$store.dispatch('buy', {
        event: this.event._id,
        amount: this.amount
        });
        this.$router.push('/tickets');
      }
    }
  },
  computed: {
    event() {
      return this.$store.state.event;
    }
  }
}
</script>

<style lang="scss">
@import '../scss/components';
#buy {
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

  section {

      &:last-child {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 1rem 2rem;
        }
  }

  .grid {
      border: 2px solid white;
      display: grid;
      margin: 10% 20%;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: "big big big" "part1 part2 part3";
      background: rgb(26, 9, 33);
  }

  .part1 {
      grid-area: part1;
      padding: 0.2rem;
      border-right: 1px white solid;
  }
  .part2 {
      grid-area: part2;
      padding: 0.2rem;
  }
  .part3 {
      grid-area: part3;
      padding: 0.2rem;
      border-left: white solid 1px;
  }
  .big {
      grid-area: big;
      padding: 0.2rem;
      border-bottom: 1px white solid;
  }
  h4 {
      font-weight: lighter;
      margin-bottom: 1rem;
      border-bottom: 5px dotted rgb(26, 9, 33);
  }
  h1 {
      margin: 0.5rem;
      font-size: 2.4rem;
  }

  .information {
      margin: 0 10%;

      p {
          margin: 0.5rem;
          text-align: left;
      }
  }
  
  .sold {
    margin: 1rem;
    color: white;
    font-weight: bold;
  }

  p {
      margin: 0.3rem;
  }

  h6 {
      margin: 0.5rem;
  }
}
</style>
