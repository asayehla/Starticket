<template lang="html">
  <article class="event-item">
    <section>
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
.menu-item {
    display: flex; //allt kommer ligga på en rad
    border: 1px solid #eee;
    border-radius: 3px;
    padding: .5rem;
    margin-bottom: .125rem;

    section {
        display:flex;
        flex-direction: column; 
        justify-content: center;
        flex: 1;

        &:first-child {
            flex: 3;

            h1 {
                font-size: 1rem;
                text-transform: uppercase;
                margin: 1rem 0 0 0;
            }

            p {
                padding:0;
                color: rgba(0,0,0, .8);
                margin:0;
                font-size: .8rem;

            }
        }
    }
}
</style>
