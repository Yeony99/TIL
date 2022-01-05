<template>
    <div>
        <hr>
        Child counter : {{ $store.state.counter }} <br />

        <!--getters-->
        <!-- Child counter : {{ num }} <br>  -->
    </div>
</template>
<script>
export default {
    props: ["num"]
}
</script>