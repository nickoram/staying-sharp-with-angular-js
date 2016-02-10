(function() {
    angular.module('NoteWrangler')
        .controller('NotesIndexController', function($http, $scope, $log) {
            $scope.notes = [];

            $http({method: 'GET', url: '/app/data/notes.json'})
                .success(function(data) {
                    $scope.notes = data;
                })
                .error(function() {
                    $log.error("an error occurred while loading data");
                });
        });
})();
