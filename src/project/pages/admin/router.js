export default {
    path: "admin",
    component: () => import("./admin-module.vue"),
    children: [
        {
            path: '',
            component: () => import('./layout/admin-layout'),
            children: [
                {
                    path: 'dashboard',
                    component: () => import('./pages/dashboard'),
                },
                {
                    path: 'open-position',
                    component: () => import('./pages/open-position/index.vue'),
                }
            ]
        },

    ]
}