<template lang="html">
  <main id="events">
    <h1>Events</h1>
    <input type="text" name="search" v-model="filter" placeholder="Search for Event">
    <section>
      <event-item v-for="event in events" :key="event.id" :event="event" />
    </section>
  </main>
</template>

<script>
import eventItem from '@/components/event-item';

export default {
  name:'events',
  data() {
    return {
      filter: null
    }
  },
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
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  color: rgb(217, 217, 217);
}

</style>
