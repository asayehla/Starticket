<template lang="html">
  <main id="events">
    <h1>Events</h1>
    <input type="text" name="" value="" placeholder="Search for Event">
    <br><br>  &#x1f50d; 
    <section class="events">
      <event-item v-for="event in events" :key="event.id" :event="event" />
    </section>
  </main>
</template>

<script>
import eventItem from '@/components/event-item';

export default {
  name:'events',
  components: {
        eventItem
  },
  methods: {

  },
  computed: {
    events() {
      return this.$store.state.events;
    }
  }
}
</script>

<style lang="scss">
@import '../scss/components';

input {
  font-size: 1.3rem;
  padding: 0.6rem;
  color: rgb(107,51,101);

}

</style>
