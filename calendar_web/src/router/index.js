import { createRouter, createWebHistory } from 'vue-router';
import DayPage from '@/views/day';



const routes = [{
        path: '/',
        name: 'DayPage',
        component: DayPage
    }, {
        path: '/month',
        name: 'MonthPage',
        component: () =>
            import ('../views/month.vue')
    }, {
        path: '/yaer',
        name: 'YearPage',
        component: () =>
            import ('../views/year.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router