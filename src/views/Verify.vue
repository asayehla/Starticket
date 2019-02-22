<template lang="html">
  <main>
    <section class="logo2">
      <img src="https://placekitten.com/100/100" alt="Logo" @click="$router.push('/events')">
      <h1>STAFF</h1>
    </section>
    <section class="verify">
      <input type="text" class="barcode" name="code" :value="code.toUpperCase()" @input="code =$event.target.value.toUpperCase()" :maxlength="codeLength" />
      <a href="#" class="btn" @click="verifyTicket"><h2>Verify ticket</h2></a>
    </section>
    <section class="verification" v-if="verification">
      <h1 id="not">{{verification}}</h1>
    </section>
  </main>
</template>

<script>
export default {
  name: 'verify',
  data() {
    return {
      code: '',
      codeLength: 5
    }
  },
  computed: {
    verification() {
      return this.$store.state.verifyData;
    }
  },
  methods: {
    async verifyTicket() {
      await this.$store.dispatch('verifyTicket', this.code);
    }
  }
}
</script>

<style lang="scss">
@import '../scss/components';

section {
    margin: 1rem;
}

#not {
  border-bottom: dotted 8px rgb(205,172,255);;
}

.verify {
    .barcode {
      font-size: 5.5rem;
      width: 23.5rem;
      text-align: center;
      border-radius: 7px 7px 0 0;
    }
}

.logo2 {
    margin-top: 3rem;
}

.ok {
    margin-bottom: 3rem;
    border-radius: 50%;
}
</style>
