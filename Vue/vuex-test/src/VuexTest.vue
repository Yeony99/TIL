<template>
  <div id="app">
    <h1>vuex</h1>
    Parent counter : {{ $store.state.counter }} <br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <child></child>

    <!--getters-->
    <!-- <child v-bind:num="childCounter"></child> -->
  </div>
</template>

<script>
import Child from "./Children2.vue";

export default {
  components: {
    child: Child
  },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
      // 차이점
      // 1. data() 속성 선언하지 않아도 됨
      // 2. Child 컴포넌트로 props 전달 x
    }

    //getters로 동작

    // addCounter: function() {
    //   console.log(this.$store)
    //   this.$store.commit('addCounter')
    // },
    // subCounter: function() {
    //   this.$store.commit('subCounter')
    // }

  },

// getters
  // computed: {
  //   childCounter: function() {
  //     return this.$store.getters.twiceCounter
  //   }
  // },
};
</script>

