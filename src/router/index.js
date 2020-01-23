import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import Auth from '@/services/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'landing',
      component: Home,
      children: [
        {
          path: 'landing',
          name: 'landing',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ '../views/Landing.vue'),
          beforeEnter: Auth.authIsLoggedIn,
        },
        {
          path: 'register',
          name: 'register',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ '../views/Register.vue'),
          beforeEnter: Auth.authIsLoggedIn,
        },
        {
          path: 'login',
          name: 'login',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ '../views/Login.vue'),
          beforeEnter: Auth.authIsLoggedIn,
        },
        {
          path: 'confirmation',
          name: 'confirmation',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ '../views/Confirmation.vue'),
          beforeEnter: Auth.authIsLoggedIn,
        },
        {
          path: '/magiclink/:token/verify',
          name: 'magiclinkverification',
          component: () => import(/* webpackChunkName: "demo" */ '../views/MagicLinkVerification.vue')
        },
      ],
    },
    {
      path: '/dashboard',
      redirect: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "dbrd" */ '../views/DashboardHome.vue'),
          beforeEnter: Auth.authCheck,
          meta: {
            is_db_view: true,
            active_class: '#dashboard_home'
          }
        },
        {
          path: '/dashboard/integrators/:integratorid/request/:id',
          name: 'requestdetails',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "dbrd" */ '../views/DashboardRequestDetails.vue'),
          beforeEnter: Auth.authCheck,
          meta: {
            is_db_view: true,
            active_class: '#dashboard_home'
          }
        },
        {
          path: '/dashboard/integrators/:id',
          name: 'integratordetails',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "dbrd" */ '../views/DashboardIntegratorDetails.vue'),
          beforeEnter: Auth.authCheck,
          meta: {
            is_db_view: true,
            active_class: '#dashboard_settings'
          }
        },
        {
          path: '/dashboard/profile',
          name: 'profile',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "dbrd" */ '../views/DashboardProfile.vue'),
          beforeEnter: Auth.authCheck,
          meta: {
            is_db_view: true,
            active_class: '#dashboard_profile'
          }
        },
        {
          path: '/dashboard/integrators',
          name: 'integrators',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "dbrd" */ '../views/DashboardIntegrators.vue'),
          beforeEnter: Auth.authCheck,
          meta: {
            is_db_view: true,
            active_class: '#dashboard_settings'
          }
        },
        {
          path: '/dashboard/users',
          name: 'users',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "dbrd" */ '../views/DashboardUsers.vue'),
          beforeEnter: Auth.authCheck,
          meta: {
            is_users: true,
            is_db_view: true,
            active_class: '#dashboard_users'
          }
        },
        {
          path: '/dashboard/playground',
          name: 'playground',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "dbrd" */ '../views/DashboardPlayground.vue'),
          beforeEnter: Auth.authCheck,
          meta: {
            is_db_view: true,
            active_class: '#dashboard_settings'
          }
        },
      ],
    },
  ],
});
