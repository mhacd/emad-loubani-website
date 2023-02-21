export default {
    path: "",
    component: () => import("./website-module.vue"),
    children: [
        {
            path: '',
            component: () => import('./layout/profile-layout'),
            children: [
                {
                    path: '',
                    component: () => import('./pages/owner-profile'),
                },
            ]
        },
        {
            path: '',
            component: () => import('./layout/hiring-layout'),
            children: [

                {
                    path: 'jobs',
                    component: () => import('./pages/jobs'),
                },
                {
                    path: 'apply/:id',
                    component: () => import('./pages/apply')
                }
            ]
        },

    ]
}