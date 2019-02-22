<template lang="html">
  <main class="container">
    <section class="logo2">
      <img src="/starticketlogo.png" alt="Logo">
      <h1>STAFF</h1>
    </section>
    <section class="verify">
      <input type="text" class="barcode" name="code" :value="code.toUpperCase()" @input="code =$event.target.value.toUpperCase()" :maxlength="codeLength" />
      <a href="#" id="vbtn" class="btn" @click="verifyTicket"><h2>Verify ticket</h2></a>
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

#not {
    margin: 0.7rem 0.3rem ;
    border-bottom: dotted 8px rgb(205,172,255);
}

.verify {
    .barcode {
        font-size: 4rem;
        text-align: center;
        border-radius: 7px 7px 0 0;
        margin: 0;
        padding: 0.5rem 0;
        width: 85%;
    }
    #vbtn {
      border-radius: 0;
      text-align: center;
        width: 99%;
        padding: 0.1rem;
    }
}

.logo2 {
    img {
        margin-top: 1rem;
        height: 8rem;
    }
    h1 {
      margin: 0.7rem;
    }

}

.ok {
    margin-bottom: 3rem;
    border-radius: 50%;
}

.grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
