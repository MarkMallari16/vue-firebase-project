import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Signup from '@/pages/Signup.vue';
import Guest from '@/pages/Guest.vue';
import { getAuth } from 'firebase/auth';
const routes = [
    {
        path: '/',
        name: 'Guest',
        component: Guest
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (getAuth().currentUser) {
            next();
        } else {
            next("/");
        }
    }else{
        next()
    }
});
export default router;