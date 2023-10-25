<template>
    <el-card class = "weather">

    </el-card>
</template>
 
<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import 'vue3-emoji/dist/style.css'
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  fetchWikipediaData();
});


const fetchWikipediaData = () => {
  fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=' + store.state.city, {
  headers: {
    'Origin': 'https://blog.csdn.net/qq_36605433/article/details/122159843' // 声明请求的来源地址
  }
})
.then(response => {
  if (response.ok) {
    return response.json()
  }
  throw new Error('Network response was not ok.')
})
.then(data => {
  console.log(data)
})
.catch(error => {
  console.error('Error:', error)
})
};

const handleSearch = () => {
  fetchWikipediaData();
};
</script>

<style scoped>
.weather{
    background-color: rgb(0, 72, 161);
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