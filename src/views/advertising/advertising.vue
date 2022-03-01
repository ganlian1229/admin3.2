<template>
    <div class="advertising">
        <div class="filter-box">
            <div class="filter-item">
                <el-date-picker
                    v-model="filterTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    @change="filterFun"
                    align="center"
                    :shortcuts="shortcuts"
                >
                </el-date-picker>
            </div>
        </div>
        <div class="filter-box filter-box2">
            <div class="filter-item">
                <el-date-picker
                    v-model="filterTime"
                    type="daterange"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    @change="filterFun"
                    align="center"
                    :shortcuts="shortcuts"
                >
                </el-date-picker>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'advertising'
};
</script>
<script setup>
import { onActivated, onMounted, ref } from 'vue';
//时间快捷选择
let shortcuts = [
    {
        text: '最近一周',
        value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
        }
    },
    {
        text: '最近一个月',
        value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
        }
    },
    {
        text: '最近三个月',
        value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
        }
    }
];
//时间筛选
let filterTime = ref('');
onMounted(() => {
    console.log('mounted');
});
onActivated(() => {
    console.log('activated');
});

//筛选方法
function filterFun() {
    getDataList();
}
//获取数据列表
function getDataList() {
    console.log(filterTime);
}
</script>
<style lang="scss">
.advertising {
}
</style>
