import { createApp } from 'vue'
import router from './router/'
import App from './App.vue'
import { pinia } from './stores/'
import './index.css'
import { useMainStore } from "./stores/main-store"
const app = createApp(App)

app.use(router)
app.use(pinia)

router.beforeEach((to) => {
    const mainStore = useMainStore(pinia)
    if (to.meta.requiresAuth && !mainStore.isLoggedIn) return '/login'
})
app.mount('#app')
