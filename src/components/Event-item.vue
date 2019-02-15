<template lang="html">
  <article class="event-item">
    <section class="datebox">
      <h1>{{ticket.date}}</h1>
    </section>
    <section>
      <h2>{{ticket.name}}</h2>
      <p>{{ticket.where}}</p>
      <p>{{ticket.when}}</p>
    </section>
    <section>
      <p>{{ticket.price}}</p>
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
        }
    },
}
</script>

<style lang="scss">
  .event-item {
      display: flex;
      border: 5px solid black;
      border-radius: 3px;
      padding: 0.5rem;
      margin-bottom: 5px;
  }

</style>
