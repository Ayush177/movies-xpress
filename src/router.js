import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const FullPage = () => import('./fullpage/FullPage.vue')
const DetailPage = () => import('./components/details/DetailPage.vue')

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: FullPage
        },
        {
            path: '/movie/:imdbID',
            name: 'details',
            component: DetailPage
        }
    ]
})