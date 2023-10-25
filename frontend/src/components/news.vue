<template>
    <el-card v-if="responseData" class = "news">
        <div style = "font-size: 20px;margin-bottom:5px;">地区新闻</div>
        <div style = "position:absolute;top:55px;left:20px;
                      overflow: hidden; /* 隐藏超出容器宽度的文本 */
                      white-space: nowrap; /* 防止文本换行 */
                      width:380px;">
            <div v-for="(news,index) in responseData.pagebean.contentlist"
                 :key="index"
                 style = "font-size: 15px;margin:5px;color:rgb(190, 190, 190);">
                 {{ index + 1 }}.
                 <a :href="news.link">{{ news.title }}</a>
            </div>
        </div>
        <!-- <div style = "color:rgb(200, 200, 200);">{{ store.state.city }}（ {{ responseData.cityInfo.c2 }} ）</div>
        <div class = "day_weather"> {{ responseData.f1.day_weather }}</div>
        <div class = "day_temperature"> {{ responseData.f1.day_air_temperature }}°C</div>
        <div class = "night_weather"> {{ responseData.f1.night_weather }}</div>
        <div class = "night_temperature"> {{ responseData.f1.night_air_temperature }}°C</div>
        <div style="position:absolute;top:100px;right:30px;font-size: 30px;"> ~ </div> -->
    </el-card>
</template>
 
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import 'vue3-emoji/dist/style.css'
import { useStore } from 'vuex';

const store = useStore();
const params = {
   areaName: store.state.area,
   page: 1,
};
const responseData = ref();

// 获取地区新闻
axios.get('https://route.showapi.com/170-47?showapi_appid=1503256&showapi_sign=826a61cff95b4ffc89b1ef1ee2b0d63a', {
  params: params
})
  .then(response => {
    // 更新响应式数据
    responseData.value = response.data.showapi_res_body;
    after_news(responseData.value);
  })
  .catch(error => {
    console.error(error);
  });

const after_news = (value) => {
    console.log(value.pagebean.contentlist)
}
</script>

<style scoped>
.news{
    background-color: #ffffff;
    width:430px;
    height:350px;
    border-radius: 10px;
    border-color: #00218F;
    color:black;
    text-align:left;
}

</style>