import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: [],
    dog: {},
  },
  mutations: {
    setDogs(state, dogs) {
      state.dogs = dogs;
    },
    setDog(state, dog) {
      state.dog = dog;
    },
  },
  actions: {
    async getDogs(context) {
      const response = await fetch('https://barkwireapi.brooks.now.sh/dogs');
      const dogs = await response.json();
      context.commit('setDogs', dogs);
    },
    async getDog(context, id) {
      const response = await fetch(`https://barkwireapi.brooks.now.sh/dogs/${id}`);
      const dog = await response.json();
      context.commit('setDog', dog);
    }
  }
})
