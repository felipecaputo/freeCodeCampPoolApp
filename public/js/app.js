var app = angular.module('poolsApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/pool/:id', {
            templateUrl: '/public/partials/poolVote.html',
            controller: 'voteController'
        })
        .otherwise({
            templateUrl: '/public/partials/mainPage.html',
            controller: 'mainController'
        });
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})