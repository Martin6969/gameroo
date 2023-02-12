import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'posts',
        component: () => import(/* webpackChunkName: "post" */
          '../views/Posts.vue')
      },
      {
        path: 'newpost',
        name: 'newpost',
        component: () => import(/* webpackChunkName: "post" */
          '../views/NewPost.vue')
      },
      {
        path: 'post/:id',
        props: true, // važno da nam se puni "id" kao parametar komponente"PostDetail.vue"
        name: 'post-detail',
        component: () => import(/* webpackChunkName: "post-detail" */
          '../views/PostDetail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log('Bio sam na', from.name, 'idem na', to.name, 'a korisnik je', store.currentUser);

  const noUser = store.currentUser === null




  if (noUser && to.meta.needsUser) {
    next("login");
  }

  else {
    next();
  }
})

export default router;
