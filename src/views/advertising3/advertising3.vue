<template>
    <div class="advertising">
        <div class="select-box">
            <mouseSelect v-model:valueList="fileList" :isHot="true" @success="selectSuccess">
                <template v-slot="{ valueList }">
                    <div
                        class="fileDiv"
                        :class="item.isAct ? 'seled' : ''"
                        v-for="(item, index) in valueList"
                        :key="index"
                    >
                        {{ item.text }}
                    </div>
                </template>
            </mouseSelect>
        </div>
    </div>
</template>
<script setup>
import mouseSelect from '@/components/mouseSelect';
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue';
let fileList = ref([
    {
        isAct: false,
        text: 'file1'
    },
    {
        isAct: false,
        text: 'file2'
    },
    {
        isAct: false,
        text: 'file3'
    },
    {
        isAct: false,
        text: 'file4'
    },
    {
        isAct: false,
        text: 'file5'
    },
    {
        isAct: false,
        text: 'file6'
    },
    {
        isAct: false,
        text: 'file7'
    },
    {
        isAct: false,
        text: 'file8'
    },
    {
        isAct: false,
        text: 'file9'
    }
]);

//选择成功
function selectSuccess(arr, arr2) {
    // this.fileList.forEach((item) => {
    //   item.isAct = false
    // })
    console.log(arr);
    console.log(arr2);
    // arr.forEach((item) => {
    //   this.fileList[item].isAct = true
    // })
}
</script>
<style lang="scss">
.advertising {
    .select-box {
        width: 50%;
        .selectParent {
            display: flex;
            flex-wrap: wrap;
            border: 1px solid red;
        }

        .fileDiv {
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-size: 12px;
            border: 1px solid #ccc;
            margin-right: 10px;
            margin-bottom: 10px;
            &.seled {
                border: 1px solid red;
                background-color: #d6dff7;
            }
        }
    }
}
</style>
