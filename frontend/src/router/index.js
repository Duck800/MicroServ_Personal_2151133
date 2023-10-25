import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/search'  // 重定向
        },
        {
            path: '/search',
            name: 'search',  // 搜索界面
            component: () => import('@/views/search/index.vue'),
        },
        {
            path: '/info',
            name: 'info',  // 信息界面
            component: () => import('@/views/Info/index.vue'),
        },
    ]
})

export default router
