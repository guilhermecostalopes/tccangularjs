var app = angular.module('tcc-angularjs');

app.
config(function ($routeProvider, $locationProvider,$httpProvider, $mdThemingProvider, $sceDelegateProvider, $mdDateLocaleProvider){
    config.routes($routeProvider);

    $mdThemingProvider.theme('default')
    .primaryPalette('blue', {'default': '800'})
    .accentPalette('grey');

    $mdDateLocaleProvider.formatDate = function(date) {
        if (date == null)
            return null;
        return moment(date).format('DD/MM/YYYY');
    };
}).
run(['$location','$rootScope', function($location,$rootScope) {
    //configurando localização do momentjs
    moment.locale('pt-br');

    //acionando evento de inciação
    $rootScope.$broadcast('appInitSucess');
    console.log('Iniciou angular!')
}]);
