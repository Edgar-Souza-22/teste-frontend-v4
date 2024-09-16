// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const pinia = createPinia()
const vuetify = createVuetify()
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(pinia)
  .use(vuetify)
  .use(router)
  .mount('#app')
