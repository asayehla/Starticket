<template lang="html">
    <main id="admin">
        <h1>Admin Page</h1>
        <section class="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Where</th>
                        <th>Availabel Seats</th>
                        <th>Sold Tickets</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in events" :key="event._id">
                        <td>{{event.name}}</td>
                        <td>{{event.where.venue}}</td>
                        <td>{{event.tickets.available}}</td>
                        <td>{{event.tickets.sold}}</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section>
            <aside class="form">
                <input type="text" placeholder="Event Name" v-model="newEvent.name">
                <input type="text" placeholder="Event Location" v-model="newEvent.where.venue">
                <input type="text" placeholder="From" v-model="newEvent.when.from">
                <input type="text" placeholder="To" v-model="newEvent.when.to">
                <input type="text" placeholder="Price" v-model="newEvent.price">
                <input type="number" placeholder="Total Tickets" v-model="newEvent.tickets.available">
                <a href="#" class="btn" @click="createEvent">Create event</a>
            </aside>
        </section>
    </main> 
</template>


<script>
export default {
    name:'admin',
    data () {
        return {
            newEvent: {
                name: '',
                where: {
                    venue: ''
                },
                when: {
                    date: '',
                    from: '',
                    to: '',
                },
                price: 0,
                tickets: {
                    available: 0,
                    sold: 0
                }
            }
        }
    },
    methods: {
    async createEvent() {
        try {
    
            await this.$http.post('http://localhost:3000/events', this.newEvent);
            this.$store.dispatch('getEvents');
        
        } catch(err) {
            alert('Error, unable to send new event');
        }

        }
    },
      computed: {
    events() {
      return this.$store.state.events;
    }
  }
}
</script>

<style lang="scss">
#admin {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center; 

    .container {
        display: flex; 
        grid-template-columns: 4fr 1fr; 
        max-width: 1000px;
        color: white;

        table {
            background: rgb(14, 42, 128);
            padding: 1rem;
            text-align: left;

            thead {
                tr {
                    th {
                        color: violet; 
                        text-align: left;
                        padding: .5rem 1rem;
                        text-transform: uppercase;
                    }
                }
            }
            tbody {
                tr {                    
                    td {
                        padding: .3rem 1rem;
                    }
                }
            }
        }
        .form {
            background: rgb(0,0,65);
            padding: 1rem;

            input {
                width: 100%;
                background: none; 
                border: 1px solid red; 
                border-radius: 3px;
                padding: .25rem;
                font-size: 1.2rem;
                color: white;
                margin: 0 0 1rem 0;
            }
        }
    }
}
</style>
