<template>
    <div class="search">
        <el-input 
        placeholder="请输入城市关键词"
        v-model="formData.keyword" 
        @keyup.enter="enterDown">
            <template #append>
                <el-button @click="enterDown">
                    <el-icon>
                        <Search />
                    </el-icon>
                </el-button>
            </template>
        </el-input>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import Message from "@/utils/Message.js"
import { useStore } from 'vuex';
import router from "@/router/index.js"
import { GetInfo } from "@/api/area.js"

const formData = reactive({
    keyword: '',
});
const store = useStore();

formData.keyword = store.state.city;
const enterDown = async() => {
    if (!formData.keyword) {
        Message.error("请输入城市关键词！");
        return;
    }
    store.dispatch('updateKeyword', formData.keyword);
    //console.log(store.state.city)
    const params = {
        area:formData.keyword,
    };
    GetInfo(params)
        .then(function (result) {
            store.commit('SaveInfo', { longitude: result.showapi_res_body.cityInfo.longitude, 
                    latitude: result.showapi_res_body.cityInfo.latitude,
                    area: result.showapi_res_body.cityInfo.c7,
                    timeArea: result.showapi_res_body.cityInfo.c17,
                    date: result.showapi_res_body.time.substring(0, 8) });
        })
        .catch(function (error) {
           console.log(error);
        })
        .finally(function(){
            if(router.currentRoute._value.name != 'search'){
                location.reload();
            }
            else{
                router.push({ name: 'info'})
            }
        })
}
</script>

<style scoped>
.search{
    position:absolute;
    bottom:40%;
    left:30%;
}

/*搜索组件最外层div */
.input_box {
    margin-right: 15px;
    border-radius: 50%;
}
/*搜索input框 */
:deep(.el-input__wrapper) {
    background-color: white;/*覆盖原背景颜色，设置成透明 */
    border-radius: 95px;
    width:550px;
    height:40px;
    border-color:black;
}
/*搜索button按钮 */
:deep(.el-input-group__append) {
    background: #00218F;
    border-radius: 50%;
    border: 0;
    color:white;
}

</style>