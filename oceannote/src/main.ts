/*
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-15 23:43:11
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 13:58:32
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import installMavonEditor from './plugins/md-mavon-editor'
const app = createApp(App)
installMavonEditor(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
installElementPlus(app)
app.use(store).use(router).mount('#app')
