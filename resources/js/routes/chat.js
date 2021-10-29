export default [
    {
        path: '/chat/',
        name: 'auth.chat',
        component: ()=> import('@/views/Chat/Main.vue'),
        meta: { showsidebar: true },
        children: [
            {
                path: ':id',
                component: ()=> import('@/views/Chat/Main.vue'),
                name: 'auth.chat.single',
                meta: { showsidebar: true },
            }
        ],
    }
];