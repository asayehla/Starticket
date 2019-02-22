<template lang="html">
  <main id="events">
    <div class="g-container">
    <section class="head1">
      <h1>Events</h1>
    </section>

    <section class="search">
      <font-awesome-icon class="icon" icon="search" />
      <input  class="inputsearch" type="text" v-model="search" placeholder="Search for Event"/>
    </section>
  </div>
    <section class="alist">
      <event-item v-for="event in filterEvent" :key="event.id" :event="event"/>
    </section>
  </main>
</template>

<script>
import eventItem from '@/components/event-item';

export default {
  name: 'events',
  data() {
    return {
      event: [],
      search: ""
    }
  },
  components: {
    eventItem
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    filterEvent: function() {
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
    .g-container {
        margin: 1rem;
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-areas:
        "head1 head1"
        "icon is";
    }

    h1 {
        margin: 1rem;
    }

    .head1 {
        grid-area: head1;
    }
    .icon {
        grid-area: icon;
        margin: 0 1rem;
    }

    .inputsearch {
        grid-area: is;
        font-size: 1rem;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        color: rgb(217, 217, 217);
    }


}
</style>
