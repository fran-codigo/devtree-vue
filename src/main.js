import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { useToast } from 'vue-toast-notification'

import App from './App.vue'
import router from './router'

import config from '../formkit.config'
import 'vue-toast-notification/dist/theme-bootstrap.css'

const $toast = useToast({
  duration: 3000,
  position: 'top-right',
})

const app = createApp(App)

app.provide('toast', $toast)
app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig(config))

app.mount('#app')
