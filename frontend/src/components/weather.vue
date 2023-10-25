<template>
    <el-card v-if="responseData" class = "weather">
        <div style = "font-size: 20px;margin-bottom:5px;">天气</div>
        <div style = "color:rgb(200, 200, 200);">{{ store.state.city }}（ {{ responseData.cityInfo.c2 }} ）</div>
        <div class = "day_weather"> {{ responseData.f1.day_weather }}</div>
        <div class = "day_temperature"> {{ responseData.f1.day_air_temperature }}°C</div>
        <div class = "night_weather"> {{ responseData.f1.night_weather }}</div>
        <div class = "night_temperature"> {{ responseData.f1.night_air_temperature }}°C</div>
        <div style="position:absolute;top:100px;right:30px;font-size: 30px;"> ~ </div>
    </el-card>
</template>
 
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import 'vue3-emoji/dist/style.css'
import { useStore } from 'vuex';
import { GetInfo } from "@/api/area.js"

const store = useStore();
const params = {
   area:store.state.city,
};
const responseData = ref();

// 获取天气
GetInfo(params)
  .then(function (result) {
    responseData.value = result.showapi_res_body;
    after_weather(responseData.value);
  })
  .catch(function (error) {
    console.log(error);
  })

const after_weather = (value) => {
    console.log(value)
    store.commit('SaveInfo', 
                  { longitude: value.cityInfo.longitude, 
                    latitude: value.cityInfo.latitude,
                    area: value.cityInfo.c7 })
}
</script>

<style scoped>
.weather{
    background-color: #00218F;
    width:300px;
    height:250px;
    border-radius: 10px;
    color:white;
    text-align:left;
}

.day_weather{
    position:absolute;
    top:15px;
    right:30px;
    font-size: 30px;;
}
.day_temperature{
    position:absolute;
    top:55px;
    right:30px;
    font-size: 20px;;
}
.night_weather{
    position:absolute;
    bottom:40px;
    right:30px;
    font-size: 30px;;
}
.night_temperature{
    position:absolute;
    bottom:15px;
    right:30px;
    font-size: 20px;;
}
</style>