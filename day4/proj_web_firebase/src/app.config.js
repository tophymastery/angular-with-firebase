// import angular from 'angular'

// angular
//     .module('app')
//     .config(Config)

export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('auth', {
            url: '/',
            template: require('./views/auth.html'),
            controller: 'AuthController',
            controllerAs: 'vm'
        })
}