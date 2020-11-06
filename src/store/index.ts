import Vue from "vue";
import Vuex from "vuex";
import flatsJson from "@/data/flats.json";

Vue.use(Vuex);

const store = new Vuex.Store<any>({
  modules: {},
  getters: {},
  actions: {
    getFlats() {
      const flats: any = flatsJson;
      if(flats) {
        return store.commit("setFlats", flats);
      }
    }
  },
  state: {
    flats: null
  },
  mutations: {
    setFlats(state: any, flats: any) {
      state.flats = flats;
    }
  }
});

export default store;
