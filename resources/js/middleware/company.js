import { store } from '@/store'
export default function company(to, from, next) {
    if (store.getters.loggedInUser.role_id!=2&&store.getters.loggedInUser.role_id!=1) 
    {
        return next({
            name: 'auth.dashboard'
        })
    }
    return next()
}