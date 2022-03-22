<template>
    <el-container class="container-content">
        <topNavBar v-model:isActive="isActive"></topNavBar>
        <leftSidebar v-model:isActive="isActive"></leftSidebar>
        <el-container class="main-container" :class="isActive ? 'active' : ''">
            <div style="width: 100%">
                <div class="body-content">
                    <router-view v-slot="{ Component }">
                        <keep-alive :include="keepAliveArr">
                            <component :is="Component"></component>
                        </keep-alive>
                    </router-view>
                </div>
            </div>
        </el-container>
    </el-container>
</template>
<script setup>
//需要缓存的路由  值是组件的name
let keepAliveArr = ref(['advertising']);
//是否收起菜单 true 收起
let isActive = ref(false);

function windowResize() {
    let clientWidth = document.body.clientWidth;
    if (clientWidth <= 1450) {
        isActive.value = true;
    } else {
        isActive.value = false;
    }
}

onMounted(() => {
    windowResize();
    window.addEventListener('resize', windowResize, false);
});
</script>

<style lang="scss" scoped>
$bgimg: '~@/assets/image/';
.container-content {
    .main-container {
        margin-left: 210px;
        position: relative;
        min-height: 100%;
        transition: margin-left 0.28s;
        padding-top: 60px;
        min-width: 1200px;
        &.active {
            margin-left: 54px;
        }
        .body-content {
            padding: 20px;
            position: relative;
            min-height: calc(100vh - 60px);
            background: #f2f4f7;
        }
    }
}
</style>
