import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

const store = createStore({
    plugins:[createPersistedState({
        storage:window.localStorage
    })],
    // 存放全局数据
    state: {
        city:'',
        area:'',
        Lng:116.405725,
        Lat:39.935362,
        timeArea:'',
        date:'',
        cityId:'',
    },
    // 计算属性，获取state里的数据内容
    // 只可读取不可修改
    getters: {},
    // 定义对state的各种操作，只能同步不能异步
    mutations: {
        SaveKeyword(state, keyword) {
            state.city = keyword;
        },
        SaveInfo(state,Info) {
            state.Lng = Info.longitude;
            state.Lat = Info.latitude;
            state.area = Info.area;
            state.timeArea = Info.timeArea;
            state.date = Info.date;
        },
        SaveId(state,cityId) {
            state.cityId = cityId;
        }
    },
    // 调用mmutations的操作，异步执行
    actions: {
        updateKeyword({ commit }, keyword) {
            commit('SaveKeyword', keyword);
            localStorage.setItem('keyword', keyword);
          }
    },
    // state信息过长时，用以进行分割
    modules: {}
})


// 保存store状态到sessionStorage
function saveStateToSessionStorage() {
    sessionStorage.setItem('store', JSON.stringify(store.state))
}

// 在页面刷新前执行保存state到sessionStorage的操作
window.addEventListener('beforeunload', saveStateToSessionStorage)

export default store