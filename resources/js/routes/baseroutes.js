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
    },
];