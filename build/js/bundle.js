/// <reference path="../../typings/angularjs/angular.d.ts" />
var brewcoffee;
(function (brewcoffee) {
    brewcoffee.app = angular.module('BrewCoffee', ['ngMaterial']).config(function () {
    });
    brewcoffee.app.controller('MyController', function ($scope, $mdSidenav) {
        $scope.openMenu = function () {
            $mdSidenav('left').toggle();
        };
    });
})(brewcoffee || (brewcoffee = {}));
var brewcoffee;
(function (brewcoffee) {
    brewcoffee.app.directive('sidenav', function () {
        return {
            restrict: 'E',
            templateUrl: "directives/sidenav.html",
            link: function (scope) {
            }
        };
    });
})(brewcoffee || (brewcoffee = {}));
var brewcoffee;
(function (brewcoffee) {
    brewcoffee.app.directive('timer', function () {
        return {
            restrict: 'E',
            templateUrl: "directives/timer.html",
            link: function (scope) {
                scope.something = "my VALUE";
            }
        };
    });
})(brewcoffee || (brewcoffee = {}));
