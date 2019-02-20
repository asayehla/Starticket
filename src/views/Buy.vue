  <template>
  <main id="buy">
    <section v-if="event">
      <h4 class="intro">Let's buy some tickets!</h4>
    </section>
    <section>
      <h1>{{event.name}}</h1>
      <p><!--{{event.when.year}}--> </p>
      <h3>
        {{event.when.date}}  {{event.when.from}} - {{event.when.to}}
      </h3>
    </section>
    <section class="information">
      <h2>@: {{event.where.venue}} {{event.where.adress}} </h2>
      <p class="information">information: {{event.info}}</p>
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
    }
  },
  components: {

  },
  methods: {
    buy() {
      this.$store.dispatch('buy', {
        event: this.event._id,
        amount: this.amount
      });
      this.$router.push('/tickets');
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
.grid {
    border: 2px solid white;
    display: grid;
    margin: 10% 20%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "big big big" "part1 part2 part3";
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

.information {
    margin: 0 15%;

    p {
        margin: 0;
        padding: 0 1.3rem;
        text-align: left;
    }
}

}
</style>
