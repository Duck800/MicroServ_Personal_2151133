<template>
    <el-card v-if="responseData" class = "oil-price">
        <div style = "font-size: 20px;margin-bottom:5px;">全省今日油价</div>
        <div style = "position:absolute;top:27%;left:68px;font-size: 16px;">0号柴油</div>
        <div class = "zero" 
        style="position:absolute;
            left:135px;
            top:64px;"> {{ responseData.p0 }}</div>
        <div style = "position:absolute;top:27%;left:192px;font-size: 16px;">元/升</div>

        <div style = "position:absolute;top:40%;left:59px;font-size: 16px;">89号汽油</div>
        <div class = "zero" 
        style="position:absolute;
            left:135px;
            top:97px;"> {{ responseData.p89 }}</div>
        <div style = "position:absolute;top:40%;left:192px;font-size: 16px;">元/升</div>

        <div style = "position:absolute;top:53%;left:59px;font-size: 16px;">92号汽油</div>
        <div class = "zero" 
        style="position:absolute;
            left:135px;
            top:129px;"> {{ responseData.p92 }}</div>
        <div style = "position:absolute;top:53%;left:192px;font-size: 16px;">元/升</div>

        <div style = "position:absolute;top:66%;left:58px;font-size: 16px;">95号汽油</div>
        <div class = "zero" 
        style="position:absolute;
            left:135px;
            top:163px;"> {{ responseData.p95 }}</div>
        <div style = "position:absolute;top:66%;left:192px;font-size: 16px;">元/升</div>

        <div style = "position:absolute;top:79%;left:58px;font-size: 16px;">98号汽油</div>
        <div class = "zero" 
        style="position:absolute;
            left:135px;
            top:195px;"> {{ responseData.p98 }}</div>
        <div style = "position:absolute;top:79%;left:192px;font-size: 16px;">元/升</div>
    </el-card>
</template>
 
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import 'vue3-emoji/dist/style.css'
import { useStore } from 'vuex';

const store = useStore();
const responseData = ref();

// 获取今日油价
axios.get(`https://route.showapi.com/138-46?showapi_appid=1503256&showapi_sign=826a61cff95b4ffc89b1ef1ee2b0d63a`)
  .then(response => {
    // 更新响应式数据
    const findprice = () => {
      return response.data.showapi_res_body.list.find((province) => province.prov === store.state.area);
    }
    responseData.value = findprice();
  })
  .catch(error => {
    console.error(error);
  });
</script>

<style scoped>
.oil-price{
    background-color: #00218F;
    width:300px;
    height:250px;
    border-radius: 10px;
    color:white;
    text-align:left;
}

.zero{
    text-align: center;
    font-size: 22px;
    color:burlywood;
}
</style>