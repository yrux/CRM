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
        path: '/task/',
        name: 'auth.tasks',
        component: ()=> import('@/views/Task/Main.vue'),
        children: [
            {
                path: 'overdue',
                component: ()=> import('@/views/Task/List.vue'),
                name: 'auth.tasks.overdue'
            },
            {
                path: 'today',
                component: ()=> import('@/views/Task/List.vue'),
                name: 'auth.tasks.today'
            },
            {
                path: 'upcomming',
                component: ()=> import('@/views/Task/List.vue'),
                name: 'auth.tasks.upcomming'
            }
        ],
    }
];