module brewcoffee {
    app.directive('timer', () => {
        return {
            restrict: 'E',
            templateUrl: "directives/timer.html",
            link: (scope: any) => {
                scope.something = "my VALUE";
            }
        }
    });
}

