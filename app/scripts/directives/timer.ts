module brewcoffee {

    interface Scope extends ng.IScope {
        something: string;
    }

    app.directive('timer', () => {
        return {
            restrict: 'E',
            templateUrl: "directives/timer.html",
            link: (scope: Scope) => {
                scope.something = "my VALUE";
            }
        }
    });
}

