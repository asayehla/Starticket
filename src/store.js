import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets : [{
      id:"01",
      name: "Carola",
      where: "Globen",
      price: 340,
      when: {
        date: "23 Juli",
        from: "19:00",
        to: "22:00"
      },
      info: "I källaren av globen",
      code: "FR445W"
    },
    {
      id:"04",
      name: "Uggla",
      where: "Globen",
      price: 340,
      when: {
        date: "23 Juli",
        from: "19:00",
        to: "22:00"
      },
      info: "I källaren av globen",
      code: "FR445W"
    }]


  },
  mutations: {

  },
  actions: {
    //async getEvents(ctx) {
      //let events = await.get('http://localhost:3000/events');
    //}
  }

})
