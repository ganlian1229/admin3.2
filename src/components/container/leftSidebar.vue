<template>
    <div class="sidebar-container" :class="props.isActive ? 'hideSidebar' : ''">
        <div class="logo-box">logo</div>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="route.path"
                :collapse="props.isActive"
                :default-openeds="openedsArr"
                :router="true"
                background-color="#212740"
                text-color="#555e86"
                active-text-color="#fff"
            >
                <template v-for="item in menus" :index="item.path">
                    <el-sub-menu
                        :index="item.path"
                        :key="item.path"
                        v-if="item.meta.show && !item.meta.isOne"
                    >
                        <template #title>
                            <el-icon><home-filled /></el-icon>
                            <span>{{ item.meta.title }}</span>
                        </template>
                        <el-menu-item
                            v-for="(list, ind) in item.children"
                            :key="ind"
                            :index="item.path + '/' + list.path"
                        >
                            <el-icon><home-filled /></el-icon>
                            <template #title> {{ list.meta.title }}</template>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-menu-item
                        :index="item.path + '/' + item.meta.onePath"
                        :key="item.name"
                        v-else
                    >
                        <el-icon><home-filled /></el-icon>
                        <template #title> {{ item.meta.title }}</template>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script setup>
import routerArr from '@/router/routes';
import { deepCopy } from '@/common/common';
import { onBeforeMount, ref, defineEmits, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const emit = defineEmits(['update:isActive']);
const props = defineProps({
    isActive: {
        type: Boolean
    }
});
//左侧导航列表
let menus = ref([]);
//需要展开的path
let openedsArr = ref([]);

onBeforeMount(() => {
    showMenu(deepCopy(routerArr));
    console.log(props);
});

//显示左侧导航
function showMenu(arr) {
    var menusArr = [];
    arr.forEach((val) => {
        if (val.meta) {
            if (val.meta.show) {
                if (val.children.length) {
                    var child = [];
                    val.children.forEach((cval) => {
                        if (cval.meta.show) {
                            child.push(cval);
                        }
                    });
                    val.children = child;
                    menusArr.push(val);
                } else {
                    menusArr.push(val);
                }
            }
        }
    });
    menus.value = menusArr;
    // console.log(this.menus);
}
</script>
<style lang="scss" scoped>
.sidebar-container {
    width: 210px;
    background-color: #212740;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1005;
    overflow: hidden;
    transition: width 0.28s;
    // padding-top: 85px;
    &.hideSidebar {
        width: 54px !important;
    }
    .logo-box {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        width: 100%;
    }

    :deep .el-scrollbar {
        height: 100%;
        .scrollbar-wrapper {
            overflow-x: hidden;
        }
    }
    :deep .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
    }
}
</style>
