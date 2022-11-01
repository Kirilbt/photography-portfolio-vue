import { createApp } from 'vue'

import router from './router.js'

import './style.css'

import App from './App.vue'

import BaseLink from './components/ui/BaseLink.vue'

const app = createApp(App)

app.use(router)

app.component('base-link', BaseLink)

app.mount('#app')
