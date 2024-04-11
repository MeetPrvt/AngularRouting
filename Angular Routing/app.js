const app = angular.module('myApp', ['ngRoute']);

app.controller('myController', function ($scope) {
    $scope.homeScreen = "Home"
})

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/navbar", {
            templateUrl: "navbar.html"
        })
})