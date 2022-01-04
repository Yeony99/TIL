<template>
    <div>
        <hr>
        <!--기존 코드, getters-->
        <!-- Child counter : {{ num }} <br>  -->

        Child counter : {{ $store.state.counter }} <br />
        <button>+</button>
        <button>-</button>
    </div>
</template>
<script>
export default {
    // props: ["num"] // 기존코드
}
</script>