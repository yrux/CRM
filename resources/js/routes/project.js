import salesupport from '@/middleware/salesupport'

export default [
    {
        path: '/project/',
        name: 'auth.projects',
        component: ()=> import('@/views/Project/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Project/List.vue'),
                name: 'auth.projects.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Project/Add.vue'),
                name: 'auth.projects.add'
            }
        ],
        beforeEnter: salesupport,
    },
    {
        path: '/open-task',
        name: 'auth.task.open',
        component: ()=> import('@/views/Project/OpenTask.vue'),
    },
    {
        path: '/task/:type',
        name: 'auth.tasks.type',
        component: ()=> import('@/views/Task/List.vue'),
    },
    {
        path: '/task/summary/:project',
        name: 'auth.task.summary',
        component: ()=> import('@/views/Task/Summary.vue'),
    }
];