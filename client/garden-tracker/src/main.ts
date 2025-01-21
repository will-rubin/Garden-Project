import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import 'bulma/css/bulma.css'

createApp(App)
.use(router)
.mount('#app')
