angular.module('itcd-intranet-ui', [
    //modulos principais
    'ngRoute', 'ngAnimate', 'ngMaterial', 'ngMask', 'ngFileUpload',

    //serviços
    //-------------
    'data','utilService',

    //diretivas
    'diretivas',

    //sub-modulos
    'page', 'usuario', 'grupo'
]);

//diretivas
angular.module('diretivas',[]);

//Serviços
angular.module('utilService', []);
angular.module('data', []);

//sub-modulos
angular.module('page', ['data']);
angular.module('usuario', []);
angular.module('grupo', []);
