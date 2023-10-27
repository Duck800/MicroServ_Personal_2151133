<template>
    <el-card v-if="responseData" class = "weather">
        <div style = "font-size: 20px;margin-bottom:5px;">天气</div>
        <div style = "color:rgb(200, 200, 200);">{{ store.state.city }}（ {{ responseData.cityInfo.c2 }} ）</div>
        <div class = "day_weather"> {{ responseData.f1.day_weather }}</div>
        <div class = "day_temperature"> {{ responseData.f1.day_air_temperature }}°C</div>
        <div class = "night_weather"> {{ responseData.f1.night_weather }}</div>
        <div class = "night_temperature"> {{ responseData.f1.night_air_temperature }}°C</div>
        <div style="position:absolute;top:100px;right:30px;font-size: 30px;"> ~ </div>

        <div style="position:absolute;top:83px;right:30px;">{{ responseData.f1.day_wind_direction }}
            {{ responseData.f1.day_wind_power.split(' ')[0] }}</div>
        <div style="position:absolute;bottom:15px;right:30px;">{{ responseData.f1.night_wind_direction }}
            {{ responseData.f1.night_wind_power.split(' ')[0] }}</div>
    </el-card>
</template>
 
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
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
  })
  .catch(function (error) {
    console.log(error);
  })
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
    bottom:60px;
    right:30px;
    font-size: 30px;;
}
.night_temperature{
    position:absolute;
    bottom:35px;
    right:30px;
    font-size: 20px;;
}
</style>