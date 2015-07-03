/// <reference path="../../typings/angularjs/angular.d.ts" />

module brewcoffee {
    export var app = angular.module('BrewCoffee', ['ngMaterial']);
    app.controller('MyController', ($scope, $mdSidenav) => {
        $scope.openMenu = () => {
            $mdSidenav('left').toggle();
        }
    });

}
