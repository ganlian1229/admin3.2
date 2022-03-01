<template>
    <div class="test">test</div>
</template>
<script setup>
import { onBeforeMount, onMounted } from 'vue';
onBeforeMount(() => {
    console.log('test beforeMount');
});
onMounted(() => {
    console.log('test mounted');
});
</script>
<style lang="scss" scoped></style>
