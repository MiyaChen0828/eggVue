import Vue from 'vue'
import Router from 'vue-router'
import { isNullOrUndefined } from 'util';

Vue.use(Router)

 let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'    
    },
    {
      path: '/index',
      name:'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/register',
      name:'register',
      component: () => import('./views/Register.vue')
    } ,
    {
      path: '/login',
      name:'login',
      component: () => import('./views/Login.vue')
    },
    {
      path:'*',
      name:'noFind',
      component:() => import('./views/404.vue')
    }
  ]
})

//路由守卫
router.beforeEach((to,from,next)=>{
  let isLogin = localStorage.eleToken?true:false;
  if(to.path == "/login" || to.path == "register"){
    next();
  }else{
    if(isLogin){
      next();
    }else{
      next("/login");
    }
  }
})
export default router;
