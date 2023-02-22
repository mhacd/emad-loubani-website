import adminRoutes from './pages/admin/router'
import websiteRoutes from './pages/website/router'

let project = {
  name: "project",
  path: "",
  component: () => import("./module-layout.vue"),
  children: [

    {
      name: "",
      path: "/",
      component: () => import("./layouts/layout/default-layout.vue"),
      children: [
        {
          path: "vue",
          component: () => import("./pages/vue/vue-page.vue"),
          children: [
            {
              path: "",
              component: () => import("./pages/vue/pages/home/home-page.vue"),
              children: [
              ]
            },
            {
              path: "register",
              component: () => import("./pages/vue/pages/register/register-page.vue"),
              children: [
              ]
            },
            {
              path: "login",
              component: () => import("./pages/vue/pages/login/login-page.vue"),
              children: [
              ]
            },
            {
              path: "bill",
              component: () => import("./pages/vue/pages/bill/bill-module.vue"),
              children: [
                {
                  path: "",
                  component: () => import("./pages/vue/pages/bill/pages/search-bill-page"),
                  children: [

                  ]
                },
                {
                  path: ":number",
                  component: () => import("./pages/vue/pages/bill/pages/view-bill-page"),
                  children: [

                  ]
                }
              ]
            },
          ]
        },
        adminRoutes,
        websiteRoutes,

      ],
    },
    {
      name:'home',
      path:'/old',
      component: ()=> import('./pages/old/index.vue')
    }
  ],
};
export default project