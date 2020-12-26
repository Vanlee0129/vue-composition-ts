import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import * as lodash from 'lodash'

const app = createApp(App)

app.config.globalProperties.$lodash = lodash

app.use(ElementPlus)
app.use(store)
app.use(router)

app.mount('#app')
