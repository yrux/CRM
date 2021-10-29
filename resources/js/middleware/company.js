export default function company(to, from, next) {
    var roleId = localStorage.getItem('logged_in_role_id')?parseInt(localStorage.getItem('logged_in_role_id')):0;
    if (roleId!=2&&roleId!=1) 
    {
        return next({
            name: 'auth.dashboard'
        })
    }
    return next()
}