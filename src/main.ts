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
    // initialize auth routine to determine if user is logged in or not
    mainStore.initialize()
    // if the route loaded requires authentication redirect to login page
    if (to.meta.requiresAuth && !mainStore.isLoggedIn) return '/login'
})
app.mount('#app')
