<template>
    <div class="Info">
        <div class = "search">
            <search />
        </div>
        <div class = "weather">
            <weather/>
        </div>
        <div class = "map">
            <MapContainer />
        </div>
        <div class = "news">
            <news />
        </div>
        <div class = "oil_price">
            <OilPrice />
        </div>
        <div class = "calendar">
            <calendar />
        </div>
        <div class = "landmark">
            <landmark @SendIndex="GetIndex"/>
        </div>
        <el-dialog v-if="responseData"
            v-model="detail" title='景点信息'
            style="border-radius: 10px;
            width:1000px;">
            <div style="display: flex;
                        align-items: center;">
                <h2 style="color:#00218F;">{{ responseData.scenicName }}</h2>
                <div style="margin-left: 10px;">
                {{ responseData.scenicAddress }}
                </div>
            </div>
            <div style="border: 1px solid #00218F ;
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
            <!-- 底部内容 -->
            <template #footer>
                <div style="text-align: center;">
                    <el-button type="primary" @click="BuyTickets">查看购票攻略</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import MapContainer from "@/components/MapContainer.vue"
import search from '@/components/search.vue'
import weather from '@/components/weather.vue'
import news from '@/components/news.vue'
import OilPrice from '@/components/OilPrice.vue'
import calendar from '@/components/calendar.vue'
import landmark from '@/components/landmark.vue'
import { useStore } from 'vuex';

const store = useStore();
const responseData = ref();
const detail = ref(false);
const currentScene = ref(-1);

const GetIndex = (scenicId) => {
// 获取推荐景点
axios.get('https://route.showapi.com/1681-2?showapi_appid=1503256&showapi_sign=826a61cff95b4ffc89b1ef1ee2b0d63a',
{ params:{
    scenicId: scenicId,
}})
  .then(response => {
    responseData.value = response.data.showapi_res_body;
    console.log(responseData.value)
  })
  .catch(error => {
    console.error(error);
  });
  if(currentScene.value == scenicId){
        detail.value = !detail.value;
    }
    else{
        detail.value = true;
    }
    currentScene.value = scenicId;
}

const BuyTickets = () => {
    
}
</script>

<style scoped>
.Info{
    background-image: url('@/assets/InfoPage.png');
    /* 背景图片位置 */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* 背景图片是否重复 */
    background-size: 100% 100%;
    position: absolute;
    z-index: 1; /* 比根元素更高 */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.search{
    position:fixed;
    top:13px;
}
.map{
    position:fixed;
    top:58px;
    left:50px;
}
.weather{
    position:fixed;
    top:79px;
    left:680px;
}
.news{
    position:fixed;
    top:80px;
    left:1020px;
}
.oil_price{
    position:fixed;
    bottom:15px;
    left:680px;
}
.calendar{
    position:fixed;
    bottom:288px;
    left:680px;
}
.landmark{
    position:fixed;
    bottom:16px;
    left:1020px;
}
</style>
