import admin from '@/middleware/admin'
import company from '@/middleware/company'
import customer from '@/middleware/customer'
import companysalesupport from '@/middleware/companysalesupport'
import companymarketing from '@/middleware/companymarketing'
export default [
	{
        path: '/dashboard',
        name: 'auth.dashboard',
        component: () => import('@/views/Panel.vue'),
    },
    {
        path: '/notifications',
        name: 'auth.notifications',
        component: () => import('@/views/Notifications.vue'),
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
        path: '/marketing_budgets/',
        name: 'auth.marketing_budgets',
        component: ()=> import('@/views/MarketingBudget/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/MarketingBudget/List.vue'),
                name: 'auth.marketing_budgets.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/MarketingBudget/Add.vue'),
                name: 'auth.marketing_budgets.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/MarketingBudget/Edit.vue'),
                name: 'auth.marketing_budgets.edit'
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
                path: 'invoices',
                component: ()=> import('@/views/Customer/Invoices.vue'),
                name: 'auth.customer.invoices'
            },
            {
                path: 'invoice/:id',
                component: ()=> import('@/views/Customer/Invoice.vue'),
                name: 'auth.customer.invoice'
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
    {
        path: '/daily-marketing-budget',
        name: 'auth.daily_marketing_budget',
        component: ()=> import('@/views/DailyMarketingBudget/Index.vue'),
        beforeEnter: companymarketing,
    },
    {
        path: '/lead_type/',
        name: 'auth.lead_type',
        component: ()=> import('@/views/LeadType/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/LeadType/List.vue'),
                name: 'auth.lead_type.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/LeadType/Add.vue'),
                name: 'auth.lead_type.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/LeadType/Edit.vue'),
                name: 'auth.lead_type.edit'
            }
        ],
        beforeEnter: companymarketing,
    },
];