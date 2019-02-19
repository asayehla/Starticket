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
            <aside class="form">
                <input type="text" placeholder="event name" v-model="newEvent.name">
                <input type="text" placeholder="event location" v-model="newEvent.where.venue">
                <input type="text" placeholder="start time" v-model="newEvent.when.from">
                <input type="text" placeholder="end time" v-model="newEvent.when.to">
                <input type="text" placeholder="price" v-model="newEvent.price">
                <input type="number" placeholder="total tickets" v-model="newEvent.tickets.available">
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
            alert('Något sket sig!');
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
    background:rgb(0,0,65);
    display: flex;
    justify-content: center;

    .logo {
        position: fixed;
        margin: 1rem; 
        width: 2rem;
        left: 0;
    }

    .container {
        display: flex; 
        grid-template-columns: 4fr 1fr; 
        max-width: 1000px;
        width: 100%; 
        color: white;

        table {
            background: darkblue; 
            padding: 1rem;

            thead {
                tr {
                    th {
                        color: pink; 
                        text-align: left;
                        border-bottom: 1px solid green; 
                        padding: .5rem 0;
                    }
                }
            }
            thead {
                tr {
                    td {
                        color: white; 
                        padding: 1rem 0;
                    }
                    &:nth-child(1) {
                        background: white;
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
