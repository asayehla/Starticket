import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    event:{},
    events: [],
    tickets:[],
    verifyData: null
  },

  mutations: {
    //update event array with event from API
    selectEvent(state, event){
      state.event = event;
    },
    setTickets(state, tickets){
      state.tickets = tickets;
    },
     //update events array with events
    setEvents(state, events){
      state.events = events;
    },
    setVerifyData(state, data){
      state.verifyData = data;
    }
  },

  actions: {
    //get events from API
    async getEvents(ctx){
      let events = await axios.get('http://localhost:3000/events');
      //console.log(events)
      ctx.commit('setEvents', events.data);
    },
    async buy (ctx,buyData) {
      let tickets = await axios.post('http://localhost:3000/tickets', buyData);
      ctx.commit('setTickets', tickets.data);
      localStorage.setItem('tickets', JSON.stringify(tickets.data));
    },
    getTickets(ctx){
      let tickets = localStorage.getItem('tickets');
      ctx.commit('setTickets', JSON.parse(tickets));
    },
    async verifyTicket(ctx, code){
      let verification = await axios.get(`http://localhost:3000/verify/${code}`);
      ctx.commit('setVerifyData', verification.data);
    }
  }
})
