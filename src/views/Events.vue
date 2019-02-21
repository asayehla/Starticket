<template lang="html">
  <main id="events">
    <h1>Events</h1>
    <input type="text" v-model="search" placeholder="Search for Event"/>
    <section>
      <event-item v-for="event in filterEvent" :key="event.id" :event="event"/>
    </section>
  </main>
</template>

<script>
import eventItem from '@/components/event-item';

export default {
  name:'events',
  data() {
    return {
      event: [],
      search: ""
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
    },
    filterEvent: function (){
      return this.events.filter((event) => {
        return event.name.toLowerCase().match(this.search.toLowerCase())
      });
    }
  }
}
</script>

<style lang="scss">
@import '../scss/components';
#events {

  h1 {
    margin: 1rem;
  }

  input {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    color: rgb(217, 217, 217);
  }
}
</style>
