import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vEditable from './directives/vEditable.js'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.directive('editable', vEditable)

app.mount('#app')
