import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepPosition: 1,

    pageOne: false,
    pageTwo: false,
    pageThree: false,
    pageFour: false,
    pageFive: false,

    BasicInfo: {}
  },
  mutations: {
    SET_ONE(state) {
      state.stepPosition = 1;
      state.pageOne = true;
      state.pageTwo = false;
      state.pageThree = false;
      state.pageFour = false;
      state.pageFive = false;
    },
    SET_TWO(state) {
      state.stepPosition = 2;
      state.pageOne = false;
      state.pageTwo = true;
      state.pageThree = false;
      state.pageFour = false;
      state.pageFive = false;
    },
    SET_THREE(state) {
      state.stepPosition = 3;
      state.pageOne = false;
      state.pageTwo = false;
      state.pageThree = true;
      state.pageFour = false;
      state.pageFive = false;
    },
    SET_FOUR(state) {
      state.stepPosition = 4;
      state.pageOne = false;
      state.pageTwo = false;
      state.pageThree = false;
      state.pageFour = true;
      state.pageFive = false;
    },
    SET_FIVE(state) {
      state.stepPosition = 5;
      state.pageOne = false;
      state.pageTwo = false;
      state.pageThree = false;
      state.pageFour = false;
      state.pageFive = true;
    },

    GET_BASIC_INFO: (state, form) => {
      state.BasicInfo = form;
    },

    printData: state => {
      console.log("Basic Info:- ", JSON.stringify(state.BasicInfo));
    }
  },
  actions: {
    setOne: (context, state) => {
      context.commit("SET_ONE", state);
    },
    setTwo: (context, state) => {
      context.commit("SET_TWO", state);
    },
    setThree: (context, state) => {
      context.commit("SET_THREE", state);
    },
    setFour: (context, state) => {
      context.commit("SET_FOUR", state);
    },
    setFive: (context, state) => {
      context.commit("SET_FIVE", state);
    },

    getBasicInfo: (context, form) => {
      context.commit("GET_BASIC_INFO", form);
    }
  },
  modules: {}
});
