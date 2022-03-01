<template>
    <div class="article-admin">
        <h1>近期优惠</h1>
        <test></test>
    </div>
</template>
<script setup>
import test from './components/test.vue';
import { onBeforeMount, onMounted } from 'vue';
onBeforeMount(() => {
    console.log('beforeMount');
});
onMounted(() => {
    console.log('mounted');
});
</script>
<style lang="scss">
.article-admin {
    background-color: transparent !important;
}
</style>
