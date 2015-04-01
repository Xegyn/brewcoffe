/// <reference path="../../typings/angularjs/angular.d.ts" />

var app = angular.module('BrewCoffee', ['ngMaterial']);
app.controller('MyController', ($scope, $mdSidenav) => {
    $scope.openMenu = () => {
        $mdSidenav('left').toggle();
    }
});


app.directive('timer', () => {
    return {
        restrict: 'E',
        templateUrl: "directives/timer.html"
    }
});