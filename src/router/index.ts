import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const isClient = typeof window !== 'undefined'

// https://router.vuejs.org/guide/advanced/meta.html

const routes = [
    { path:'/', name: 'Home', component: () => import("@/views/HomePage.vue"), meta: { requiresAuth: false } },
    { path:'/signin', name: 'Signin', component: () => import("@/views/Signin.vue"), meta: { requiresAuth: false } },
    { path:'/register', name: 'Register', component: () => import("@/views/Register.vue"), meta: { requiresAuth: false } },
    { path:'/verify-otp', name: 'Verify-otp', component: () => import("@/views/Verifyotp.vue"), meta: { requiresAuth: false } },
    { path:'/contact-us', name: 'Contact-us', component: () => import("@/views/Contact.vue"), meta: { requiresAuth: false }},
    { path:'/faqs', name: 'Faqs', component: () => import("@/views/Faqs.vue"), meta: { requiresAuth: false } },
    // only authenticated users can view profile
    { path:'/profile', name: 'Profile', component: () => import("@/views/Profile.vue"), meta: { requiresAuth: true } },
]

const router = createRouter({
    history: isClient ?  createWebHistory() : createMemoryHistory(),
    routes
})

export default router
