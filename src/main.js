import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

//使用router
import router from './router';
app.use(router);

//全局注册elementIcon
import * as ElIcons from '@element-plus/icons-vue';
for (const name in ElIcons) {
    app.component(name, ElIcons[name]);
}
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//使用pinia
import setupStore from '@/store/useStore.js';
setupStore(app);

//使用自定义指令
import setupDirective from '@/directive';
setupDirective(app);

app.use(ElementPlus).mount('#app');
