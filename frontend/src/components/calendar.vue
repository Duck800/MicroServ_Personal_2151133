<template>
    <el-card class = "calendar">
        <div style = "font-size:14px;position:absolute;top:35px;">时区（GMT{{ store.state.timeArea }}）</div>
        <h1 style = "position:absolute;
                    top:28px;
                    left:20px;
                    font-size:60px;">{{ currentTime }}</h1>
        <div style = "font-size:16px;
                      position:absolute;
                      top:140px;
                      left:75px;">
            {{ store.state.date.substring(0,4) }} 年
            {{ store.state.date.substring(4,6) }} 月
            {{ store.state.date.substring(6,8) }} 日</div>
    </el-card>
</template>
  
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  // 响应式变量
  const currentTime = ref('');
  
  // 更新时钟
  const updateClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    currentTime.value = `${hours}:${minutes}:${seconds}`;
  };
  
  // 启动和停止定时器
  let timerId;
  onMounted(() => {
    updateClock();
    timerId = setInterval(updateClock, 1000);
  });
  onUnmounted(() => {
    clearInterval(timerId);
  });
</script>

<style scoped>
.calendar{
    width:300px;
    height:200px;
    border-radius: 10px;
    text-align:left;
}
</style>