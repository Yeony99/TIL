<template>
    <div>
        <hr>
        Child counter : {{ num }} <br>
    </div>
</template>
<script>
export default {
    props: ["num"]
}
</script>