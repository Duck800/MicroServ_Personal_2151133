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
    </div>

</template>

<script setup>
import { ref } from 'vue';
import MapContainer from "@/components/MapContainer.vue"
import search from '@/components/search.vue'
import weather from '@/components/weather.vue'
import news from '@/components/news.vue'

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
    right:50px;
}
</style>
