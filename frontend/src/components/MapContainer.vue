<template>
    <div class="map" ref="baiduRef"></div>
    <div></div>
</template>
  
<script setup>
  import axios from "axios";
  import { onMounted, ref, onUnmounted, reactive, toRefs } from "vue";
  import { useStore } from 'vuex';

  const store = useStore();
  // 地图嵌入
  const baiduRef = ref();

const initMap = () => {
  const BMap = window.BMap;
  baiduRef.value = new BMap.Map(baiduRef.value);
  const point = new BMap.Point(store.state.Lng, store.state.Lat);
  baiduRef.value.centerAndZoom(point, 10);

  const markerPoint = new BMap.Point(store.state.Lng, store.state.Lat);
  const marker = new BMap.Marker(markerPoint);
  baiduRef.value.addOverlay(marker);

  const navigationControl = new BMap.NavigationControl();
  baiduRef.value.addControl(navigationControl);
  baiduRef.value.enableScrollWheelZoom(true); //滚轮缩放
};

onMounted(() => {
  initMap();
});

onUnmounted(() => {
  if (baiduRef.value) {
    baiduRef.value.clearOverlays();
    baiduRef.value.dispose();
    baiduRef.value = null;
  }
});
</script>
  
<style scoped>
  .map {
    position:fixed;
    top:21px;
    width: 600px;
    height: 750px;
    border-radius: 10px;
    border-color: #00218F;
  }
</style>