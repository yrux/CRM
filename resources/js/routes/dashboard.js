import admin from '@/middleware/admin'
import company from '@/middleware/company'
export default [
	{
        path: '/dashboard',
        name: 'auth.dashboard',
        component: () => import('@/views/Panel.vue'),
    },
    {
        path: '/profile',
        name: 'auth.profile',
        component: () => import('@/views/Profile.vue'),
    },
    {
        path: '/company/add',
        name: 'auth.company.add',
        component: () => import('@/views/Company/Add.vue'),
        beforeEnter: admin,
        // meta: {
        //     middleware: admin
        // }
    },
    {
        path: '/company/edit/:id',
        name: 'auth.company.edit',
        component: () => import('@/views/Company/Edit.vue'),
        beforeEnter: admin,
        // meta: {
        //     middleware: admin
        // }
    },
    {
        path: '/company/list',
        name: 'auth.company.listing',
        component: () => import('@/views/Company/List.vue'),
        beforeEnter: admin,
        // meta: {
        //     middleware: admin
        // }
    },
    {
        path: '/brand/',
        name: 'auth.brands',
        component: ()=> import('@/views/Brand/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Brand/List.vue'),
                name: 'auth.brands.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Brand/Add.vue'),
                name: 'auth.brands.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Brand/Edit.vue'),
                name: 'auth.brands.edit'
            }
        ],
        beforeEnter: company,
    },
];