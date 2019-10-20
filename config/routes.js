if(config==undefined)var config={};
config.routes=function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/home.html'
    }).
    when('/usuarios', {
        templateUrl: 'views/usuario/usuario.html',
        permissions: '/usuarios/#/usuario'
    }).
    when('/grupos', {
        templateUrl: 'views/grupo/grupo.html',
        permissions: '/grupos/#/grupo'
    }). otherwise({
        template: "<div>página não encontrada</div>",
    });
};