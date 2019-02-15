<template lang="html">
  <article class="event-item">
    <section class="datebox">
        item.date
    </section>
    <section>
      <h2>item.name</h2>
      <p>item.plats</p>
      <p>item.date</p>
    </section>
    <section>
      <p>item.price</p>
    </section>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .event-item {
      display: flex;
      border: 1px solid black;
      border-radius: 3px;
      padding: 0.5rem;
      margin-bottom: 5px;
  }

</style>
