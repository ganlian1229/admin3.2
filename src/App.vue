<template>
    <div id="app">
        <el-config-provider :locale="locale">
            <router-view />
        </el-config-provider>
    </div>
</template>
<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn';
let locale = zhCn;
</script>
<style lang="scss">
@import '@/assets/css/common.scss';
</style>
