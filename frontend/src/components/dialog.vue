<template>
    <el-dialog 
            v-model="show" title='景点信息'
            style="border-radius: 10px;
            width:1000px;">
            <div style="display: flex;
                        align-items: center;">
                <h2 style="color:#00218F;">{{ responseData }}</h2>
                <div style="margin-left: 10px;">
                {{ responseData }}
                </div>
            </div>
            <!-- <div style="border: 1px solid #00218F ;
                    border-radius: 10px;
                    padding:10px;
                    text-align: left;"
                    v-if="responseData.recommend != '   '">
                {{ responseData.recommend }}
                <div style="text-align: center;">
                    <img :src="responseData.defaultPic"/>
                </div>
            </div>
            <div style="display: flex;padding:20px;">开放时间：{{ responseData.openTime }}</div>
            <div style="display: flex;
                        align-items: center;"
                        v-if="responseData.trafficBus">
                <div style="background-color: #00218F ;
                    border-radius: 10px;
                    padding:10px;
                    color:white;">推荐交通路线</div>
                <div style="text-align: left;margin:10px">{{ responseData.trafficBus }}</div>
            </div>
            
            <template #footer>
                <div style="text-align: center;">
                    <el-button type="primary" @click="BuyTickets">查看购票攻略</el-button>
                </div>
            </template> -->
        </el-dialog>
</template>

<script setup>
import axios from 'axios';
import { toRefs } from 'vue'
import { ref } from 'vue';

const props = defineProps({
  //子组件接收父组件传递过来的值
  scenicId: String,
})
const responseData = ref();
const show = true;
//使用父组件传递过来的值
const {scenicId} =toRefs(props)
console.log(props)

// 获取推荐景点
axios.get('https://route.showapi.com/1681-2?showapi_appid=1503256&showapi_sign=826a61cff95b4ffc89b1ef1ee2b0d63a',
{ params:{
    scenicId: scenicId,
}})
  .then(response => {
    responseData.value = response.data.showapi_res_body;
  })
  .catch(error => {
    console.error(error);
  });
</script>

<style scoped>

</style>