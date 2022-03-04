export default [
	{
        path: '/',redirect: { name: 'auth.login' }
    },
    {
        path: '/login',
        name: 'auth.login',
        component: () => import('@/views/Auth/Login.vue'),
    },
    {
        path: '/payment/:id',
        name: 'guest.payment',
        component: () => import('@/views/Guest/Payment.vue'),
        meta: { guest: true, showsidebar: true },
    },
    {
        path: '/payment/:id/stripe-success',
        name: 'guest.payment.success',
        component: () => import('@/views/Guest/PaymentStripeSuccess.vue'),
        meta: { guest: true },
    },
    {
        path: '/brief-detail/:id',
        name: 'guest.brief.detail',
        component: () => import('@/views/Guest/Briefs.vue'),
        meta: { guest: true },
    },
    {
        path: '/updates',
        name: 'guest.crm.updates',
        component: () => import('@/views/Guest/Updates.vue'),
        meta: { guest: true },
    },
    
];