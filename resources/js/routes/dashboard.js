import admin from '@/middleware/admin'
import company from '@/middleware/company'
import customer from '@/middleware/customer'
import companysalesupport from '@/middleware/companysalesupport'
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
        path: '/brief/',
        name: 'auth.brief',
        component: ()=> import('@/views/Brief/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Brief/List.vue'),
                name: 'auth.brief.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Brief/Add.vue'),
                name: 'auth.brief.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Brief/Edit.vue'),
                name: 'auth.brief.edit'
            }
        ],
        beforeEnter: company,
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
    {
        path: '/users/',
        name: 'auth.users',
        component: ()=> import('@/views/User/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/User/List.vue'),
                name: 'auth.users.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/User/Add.vue'),
                name: 'auth.users.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/User/Edit.vue'),
                name: 'auth.users.edit'
            }
        ],
        beforeEnter: company,
    },
    {
        path: '/leads/',
        name: 'auth.leads',
        component: ()=> import('@/views/Lead/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Lead/List.vue'),
                name: 'auth.leads.listing'
            },
            {
                path: ':id/messages',
                component: ()=> import('@/views/Lead/Messages.vue'),
                name: 'auth.leads.messages'
            },
            {
                path: ':id/payments',
                component: ()=> import('@/views/Lead/Payments/Create.vue'),
                name: 'auth.payment.create'
            },
        ],
        beforeEnter: companysalesupport,
    },
    {
        path: '/customer/',
        name: 'auth.customer',
        component: ()=> import('@/views/Customer/Main.vue'),
        children: [
            {
                path: 'chat',
                component: ()=> import('@/views/Customer/Chat.vue'),
                name: 'auth.customer.chat'
            },
            {
                path: 'briefs',
                component: ()=> import('@/views/Customer/Briefs/List.vue'),
                name: 'auth.customer.briefs.listing'
            },
            {
                path: 'briefs/:id',
                component: ()=> import('@/views/Customer/Briefs/Edit.vue'),
                name: 'auth.customer.briefs.edit'
            }
        ],
        beforeEnter: customer,
    },
];