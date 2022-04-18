import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const isClient = typeof window !== 'undefined'

const routes = [
    {path:'/', name: 'Home', component: () => import("@/views/HomePage.vue")},
    {path:'/signin', name: 'Signin', component: () => import("@/views/Signin.vue")},
    {path:'/register', name: 'Register', component: () => import("@/views/Register.vue")},
    {path:'/verify-otp', name: 'Verify-otp', component: () => import("@/views/Verifyotp.vue")},
    {path:'/contact-us', name: 'Contact-us', component: () => import("@/views/Contact.vue")},
    {path:'/faqs', name: 'Faqs', component: () => import("@/views/Faqs.vue")},
    {path:'/profile', name: 'Profile', component: () => import("@/views/Profile.vue")},
]

const router = createRouter({
    history: isClient ?  createWebHistory() : createMemoryHistory(),
    routes
})

export default router
