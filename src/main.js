import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

//添加全局组件（动态）记住文件名称不能重复
import setupGlobal from '@/componentsGlobal/index.js';
setupGlobal(app);

//使用router
import router from './router';
app.use(router);

//使用ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
app.use(ElementPlus, { locale: zhCn, zIndex: 3000 });
//全局注册elementIcon
import * as ElIcons from '@element-plus/icons-vue';
for (const name in ElIcons) {
    app.component(name, ElIcons[name]);
}

//使用pinia
import setupStore from '@/store';
setupStore(app);

//使用自定义指令
import setupDirective from '@/directive';
setupDirective(app);

app.mount('#app');
