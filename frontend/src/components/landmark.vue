<template>
    <el-card  class = "landmark">
        <div style = "font-size: 20px;margin-bottom:5px;">推荐景点</div>
        <div style = "position:absolute;top:60px;left:15px;
                      overflow: hidden; /* 隐藏超出容器宽度的文本 */
                      white-space: nowrap; /* 防止文本换行 */
                      width:380px;
                      column-count: 2;">
            <div v-for="(scene,index) in responseData"
                 :key="index"
                 style = "overflow:auto;font-size: 15px;margin:5px;color:rgb(190, 190, 190);"
                 @click="SendIndex(index)">
                 {{ index + 1 }}.
                 {{ scene.scenicName }}
            </div>
        </div>
    </el-card>
</template>
  
<script setup>
  import { ref, defineEmits } from 'vue';
  import { useStore } from 'vuex';
  import axios from 'axios';
  const store = useStore();
  const responseData = ref();

// 获取推荐景点
axios.get('https://route.showapi.com/1681-1?showapi_appid=1503256&showapi_sign=826a61cff95b4ffc89b1ef1ee2b0d63a',
{ params:{
    key: store.state.city,
    pageSize: 20
}})
  .then(response => {
    responseData.value = response.data.showapi_res_body.result;
  })
  .catch(error => {
    console.error(error);
  });

const emits = defineEmits(['SendIndex'])
const SendIndex = (index) => {
    //传递给父组件
    emits('SendIndex', responseData.value[index].scenicId)
}

</script>

<style scoped>
.landmark{
    background-color: #ffffff;
    width:430px;
    height:365px;
    border-radius: 10px;
    border-color: #00218F;
    color:black;
    text-align:left;
}
</style>