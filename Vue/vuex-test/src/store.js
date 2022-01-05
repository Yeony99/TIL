import Vue from "vue";
import Vuex from "vuex"

// store.js 생성

Vue.use(Vuex);

export const store = new Vuex.Store({

    // state 등록
    state: {
        counter: 0
    },







    // 추가
    // state값 쉽게 접근
    getters: {
        twiceCounter: state => state.counter * 2
    },

    // // state값 변경
    mutations: {
        addCounter: state => state.counter++,
        subCounter: state => state.counter--
    },

    // 비동기 처리
    actions: {
    
    }
})