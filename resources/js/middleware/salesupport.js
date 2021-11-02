export default function salesupport(to, from, next) {
    var roleId = localStorage.getItem('logged_in_role_id')?parseInt(localStorage.getItem('logged_in_role_id')):0;
    if (roleId!=4&&roleId!=5) 
    {
        return next({
            name: 'auth.dashboard'
        })
    }
    return next()
}