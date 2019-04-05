var loginRoute = require('./loginRoutes')
var routeHome = require('./homeRoutes')
var routeMenu = require('./menuRoutes')

module.exports = function(app)
{
    app.use('/',loginRoute)
    app.use('/:lang(az|en)/login',loginRoute)
    app.use('/:lang(az|en)/index',loginRoute)
    app.use('/:lang(az|en)/',loginRoute)

    app.use('/:lang(az|en)/users',routeHome)

    app.use('/:lang(az|en)/menus',routeMenu)
    
}
