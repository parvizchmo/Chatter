import axios from "axios";

const state = {
  products: [],
};

const mutations = {
  initializeStore(state, newData) {
    state.products = newData;
  },
};

const actions = {
  async loadVehicle({ commit }) {
    const response = await axios.get("http://localhost:3000/api/info/card");
    commit("initializeStore", response.data);
  },

  async addVehicle({ dispatch }, payload) {
    await axios.post("http://localhost:3000/api/info/card", payload);
    dispatch("loadVehicle");
  },

  async removeVehicle({ dispatch }, id) {
    await axios.delete(`http://localhost:3000/api/info/card/${id}`);
    dispatch("loadVehicle");
  },
};

const getters = {
  getVehicleInfo(state) {
    return state.products;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
