module brewcoffee {
    app.directive('sidenav', () => {
        return {
            restrict: 'E',
            templateUrl: "directives/sidenav.html",
            link: (scope: ng.IScope) => {
            }
        }
    });
}

