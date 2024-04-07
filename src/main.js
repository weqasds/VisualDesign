//import './assets/main.css'
import './assets/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts';
const app=createApp(App)
app.use(router);
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, comp);
}
app.config.globalProperties.$echart=echarts;
app.use(ElementPlus);
app.mount('#app');
