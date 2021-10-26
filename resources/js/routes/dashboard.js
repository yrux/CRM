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
];