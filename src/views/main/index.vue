<template>
    <div class="main-index">
        <div class="left">
            <p class="test">
                数字：<el-input
                    v-numbers="3"
                    placeholder="只能输入数字"
                    v-model="number"
                ></el-input>
            </p>
            <p>使用pinia储存的登录userId：{{ userInfo.userId }}</p>
            <div class="load-more-box" v-loadmore="moreFun">
                <p v-for="(item, index) in dataList" :key="index">{{ index }}</p>
            </div>
            <div class="box">
                <h1 v-drag="{ dom: 'dom.parent', callBack: dragFun }">1111</h1>
            </div>
            <div class="box" v-drag="dragFun"></div>
            <div class="box-resize" v-resize="boxResizeFun"></div>
            <el-button v-longpress="longPressFun">长按2秒</el-button>
            <el-button v-longpress="{ time: 4000, callBack: longPressFun }">长按4秒</el-button>
        </div>
        <div class="right">
            <globalCom></globalCom>
            <testGlobalCom></testGlobalCom>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import mainStore from '@/store/mainStore';
import { storeToRefs } from 'pinia';
let store = mainStore();
let { userInfo } = storeToRefs(store);

let number = ref('');
let dataList = ref([]);

onMounted(() => {
    getDataList();
});

function longPressFun() {
    console.log('长按事件触发！');
}
function boxResizeFun() {
    console.log('box-resize大小改变了！');
}
function moreFun() {
    getDataList();
}
function dragFun(event) {
    console.log(event);
}
function getDataList() {
    for (let i = 0; i < 20; i++) {
        dataList.value.push({
            index: i
        });
    }
}
</script>
<style lang="scss">
.main-index {
    background-color: transparent !important;
    display: flex;
    .right {
        margin-left: 50px;
    }
    .box {
        position: absolute;
        left: 330px;
        top: 100px;
        width: 50px;
        height: 50px;
        background-color: red;
    }
    .load-more-box {
        width: 200px;
        height: 300px;
        overflow-y: auto;
    }
    .test {
        display: flex;
        align-items: center;
    }
    .el-input {
        width: 150px;
        margin-left: 10px;
    }
}
</style>
