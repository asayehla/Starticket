<template lang="html">
    <main id="admin">
        <h1>Admin Page</h1>
        <section class="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Where</th>
                        <th>Total Seats</th>
                        <th>Sold Tickets</th>
                        <th>Available Tickets</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in events" :key="event._id">
                        <td>{{event.name}}</td>
                        <td>{{event.where.venue}}</td>
                        <td>{{event.tickets.available}}</td>
                        <td>{{event.tickets.sold}}</td>
                        <td>{{event.tickets.available - event.tickets.sold}}</td>
                    </tr>
                </tbody>
            </table>
            <aside class="form">
                <h3 class="add">Add New Event</h3>
                <input type="text" class="name" placeholder="Event Name" v-model="newEvent.name">
                <input type="text" class="venue" placeholder="Event Venue" v-model="newEvent.where.venue">
                <input type="text" class="address" placeholder="Event Address" v-model="newEvent.where.adress">
                <input type="text" class="date" placeholder="Event Date" v-model="newEvent.when.date">
                <input type="text" class="from" placeholder="From" v-model="newEvent.when.from">
                <input type="text" class="to" placeholder="To" v-model="newEvent.when.to">
                <input type="text" class="year" placeholder="Year" v-model="newEvent.when.year">
                <input type="text" class="info" placeholder="Info" v-model="newEvent.info">
                <input type="number" class="price" placeholder="Price" v-model="newEvent.price">
                <input type="number" class="available" placeholder="Total Tickets" v-model="newEvent.tickets.available">
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
                    venue: '',
                    adress: ''
                },
                when: {
                    date: '',
                    from: '',
                    to: '',
                    year: ''
                },
                info: '',
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

<style lang="scss" scoped="admin-style">
#admin {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center; 

    .container {
        max-width: 1000px;
        width: 100%;
        color: white;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 1rem;

        table {
            background: rgb(0,0,65);
            padding: 1rem;
            text-align: left;

            thead {
                tr {
                    th {
                        color: rgb(234, 171, 234); 
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
    }
    .form {
        background: rgb(0,0,65);
        padding: 1rem;
        display: grid;
        grid-gap: .5rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 3rem 2.6rem 2.6rem 2.6rem 2.6rem 2.6rem 2.6rem 2.6rem 2.6rem 2.6rem; 
        grid-template-areas: 
        "add add"
        "attend attend"
        "venue venue"
        "address address"
        "date date"
        "from to"
        "info info"
        "year price"
        "tickets tickets"
        "btn btn";

        input {
            width: 100%;
            background: none; 
            box-sizing: border-box;
            border: 1px solid lightgray; 
            border-radius: 3px;
            padding: .85rem;
            font-size: 1.2rem;
            color: whitesmoke;
        }
        .add {
            grid-area: add;
            margin: 10px;
            text-align: left;
            color: rgb(234, 171, 234);
        }

        .name { 
            grid-area: attend;
        }
        .venue { 
            grid-area: venue; 
        }
        .address { 
            grid-area: address; 
        }
        .date { 
            grid-area: date; 
        }
        .from { 
            grid-area: from; 
        }
        .to {
            grid-area: to; 
        }
        .info { 
            grid-area: info; 
        }
        .price { 
            grid-area: price; 
        }
        .available { 
            grid-area: tickets; 
        }
        .btn {
            grid-area: btn;
        }
        .year {
            grid-area: year;
        }
    }
}
</style>
