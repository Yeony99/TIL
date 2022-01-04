<template>
  <div id="app">
    <!--기존코드-->
    <!-- Parent counter : {{ counter }} <br>  -->
    Parent counter : {{ $store.state.counter }} <br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달. -->
    <child v-bind:num="counter"></child>
  </div>
</template>

<script>
import Child from "./Children.vue";

export default {
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    child: Child
  },
  // 기존코드
  // data() {
    // return {
    //   counter: 0
    // };
  // },
  methods: {
    // 이벤트 추가
    addCounter() {
    //   // this.counter++; // 기존코드
      this.$store.state.counter++;
    },
    subCounter() {
    //   // this.counter--; // 기존코드
      this.$store.state.counter--;
    //   // 차이점
    //   // 1. data() 속성 선언하지 않아도 됨
    //   // 2. Child 컴포넌트로 props 전달 x
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

  computed: {
    counter: function() {
      return this.$store.getters.counter
    }
  },
};
</script>

