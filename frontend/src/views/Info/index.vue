<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

// 使用ref函数创建一个响应式的数据
const responseData = ref();
const params = {
   area:'南通',
};

// 在组件创建时发起API请求
axios.get('https://route.showapi.com/9-2?showapi_appid=1475668&showapi_sign=2c780d7234d547a49d4df8a0e9331f2d', {
  params: params
})
  .then(response => {
    // 更新响应式数据
    responseData.value = response.data;

    after_weather(responseData.value);
  })
  .catch(error => {
    console.error(error);
  });


const after_weather = (value) => {
  console.log(value.showapi_res_body)
}
</script>

<template>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
