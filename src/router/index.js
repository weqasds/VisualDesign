import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name: '图表测试',
        path: '/demo',
        component: ()=> import('../views/demo.vue'),
    },
    {
        name: '首页',
        path: '/',
        component: ()=> import('../views/Index.vue'),
    },
    {
        name:'demo',
        path: '/demo',
        component: ()=>import('../components/navbar/demo.vue'),
    },
    {
        name: '教育',
        path: '/education',
        component: ()=> import('../views/Education.vue'),
    },
    {
        name: '科技',
        path: '/keji',
        component: ()=> import('../views/keji.vue'),
    },
    {
        name: '健康',
        path: '/health',
        component: ()=> import('../views/Health.vue'),
    },
    {
        name: '和平',
        path: '/peace',
        component: ()=> import('../views/Peace.vue'),
    }
]


  // 3. 创建路由实例并传递 `routes` 配置
  // 你可以在这里输入更多的配置，但我们在这里
  // 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes:routes,
})
export default router