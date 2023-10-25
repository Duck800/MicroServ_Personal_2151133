<template>
    <div>
        <div class="start_up">
            <search/>
        </div>
  </div>
</template>

<script setup>
import search from '@/components/search.vue'
</script>

<style scoped>
.start_up{
    background-image: url('@/assets/StartPage.png');
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
</style>