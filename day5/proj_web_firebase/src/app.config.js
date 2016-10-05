import firebase from 'firebase'

export default function Config ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject'
    firebase.initializeApp({
        apiKey: 'AIzaSyBYrjsGKdjGVYy7kaVEvEizvPAVhcFfJAE',
        authDomain: 'angular-cause.firebaseapp.com',
        databaseURL: 'https://angular-cause.firebaseio.com',
        storageBucket: 'angular-cause.appspot.com',
        messagingSenderId: '279328371795'
    })

    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('auth', {
            abstract: true,
            template: require('./views/auth.html'),
            controller: 'AuthController',
            controllerAs: 'vm'
        })
        .state('auth.signin', {
            url: '/',
            template: require('./views/signin.html')
        })
        .state('auth.register', {
            url: '/register',
            template: require('./views/register.html')
        })

}