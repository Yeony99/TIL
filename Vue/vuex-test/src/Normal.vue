<template>
<div>
    <h1>props/emit</h1>
    Parent counter : {{ counter }} <br> 
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
    child: Child
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    subCounter() {
      this.counter--;
    }
  }
};
</script>

