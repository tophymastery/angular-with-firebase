import firebase from 'firebase'

export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
            url: '/',
            template: require('./views/auth.html'),
            controller: 'AuthController',
            controllerAs: 'vm'
        })
}