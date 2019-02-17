<template lang="html">
    <main>
    <section>
        <h1>Admin Page</h1>
    </section>
    <section>
        <div class="table">
            <p>Name</p>
                <!--<li v-for="(item,index) in items">
                    {{item.text}}
                </li>-->
            <p>Where</p>
            <p>Available Seats</p>
            <p>Sold Tickets</p>
        </div>
    </section>

    <!--Form to add new events-->
    <section>
        <form class="add-event">
        <h3>Add Event</h3>
            <label>
                <input type="text" v-model="add.name" placeholder="Name">
            </label>
            <label>
                <input type="text" v-model="add.where" placeholder="Where">
            </label>
            <label>
                <input type="text" v-model="add.date" placeholder="Date">
            </label>
            <label>
                <input type="number" v-model="add.from" placeholder="From Time">
            </label>
            <label>
                <input type="number" v-model="add.to" placeholder="To Time">
            </label>
            <label>
                <input type="text" v-model="add.seats" placeholder="# Seats">
            </label>
            <br>
            <button @click="submit">Add The Event</button>
        </form> 
    </section>

    </main>
</template>

<script>
export default {
  data() {
    return {
      add: {
        name: '',
        where: '',
        date: '',
        from: '',
        to: '',
        seats: '',
      }
    }
  },

  methods: {
    submit() {
      // Send data to the server, or update your store.
    }
  }
}
</script>

<style lang="scss">
.table {
    display: flex; 
    justify-content: center; 
    margin: 5px 30px;
    background-color: rgb(0,0,65);
    p {
    font-size: 1rem;
    color: #F56B9A;
    width: 200px;
    margin: 20px 0;
    border-bottom: grey .1rem solid; 
    text-align: left;
  }
  li {
      color: red;
  }
}
//Form - "Add Event"
h3 {
    color: #F56B9A;
    font-size: 1.7rem;
    display: flex;
    margin: 8px auto;
    box-sizing: border-box;
    justify-content: center;
}
.add-event {
    background-color: rgb(0,0,65);
    padding: 15px 0;
    margin: 8px 30px;
    input  {
        min-width: 85%;
        border-radius: 3px;
        font-size: .7rem;
        border: 0.5px solid grey;
        background-color: rgb(0,0,80);
        color: white; 
        padding: 10px 15px;
        margin: 8px 0;
    }
}
button {
    background-color: #F56B9A;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    min-width: 80%; 
    color: white; 
    padding: 8px 10px; 
    margin: 8px 0; 
    border-radius: 4px;
    border: none; 
}
</style>
