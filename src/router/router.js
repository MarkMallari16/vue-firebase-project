import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Signup from '@/pages/Signup.vue';
import Guest from '@/pages/Guest.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Transactions from '@/pages/Transactions.vue';

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
    },
    {
        path: '/transactions',
        name: 'Transactions',
        component: Transactions
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}
router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            next("/");
        }
    } else {
        next()
    }
});
export default router;