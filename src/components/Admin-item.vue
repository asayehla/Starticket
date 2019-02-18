<template lang="html">
  <article>
    <div class="table">
      <p>{{event.name}}</p>
      <p>{{event.where.adress}}</p>
      <p>{{event.tickets.available}}</p>
      <p>{{event.tickets.sold}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'admin',
  props: ['event']
}
</script>

<style lang="css">
</style>
