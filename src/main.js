import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router.js'

import './reset.css'

import App from './App.vue'

import BaseLink from './components/ui/BaseLink.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.component('base-link', BaseLink)

app.mount('#app')
