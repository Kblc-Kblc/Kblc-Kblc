import Vue from "vue";
import Router from "vue-router";


Vue.use(Router)


export default new Router({
   mode: 'history',
   routes: [
      {
         path: '/castomStatic',
         component: () => import('./components/views/castomStatic.vue')   //путь до страницы которой нужно получить
      },
      {
         path: '/innok',
         component: () => import('./components/views/innok.vue') 
      },
      {
         path: '/about',
         component: () => import('./components/views/about.vue') 
      }
   ]
})