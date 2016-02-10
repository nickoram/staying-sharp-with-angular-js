(function() {
    angular.module('NoteWrangler')
        .directive("nwCard", function() {
            return {
                restrict: "E",
                templateUrl: "templates/directives/nw-card.html",
                controller: function($scope) {
                    $scope.title = "This will temporarily disable seeing the actual note.";
                    $scope.description = "This will temporarily disable seeing the actual note.";
                },
            };
        });
})();
