(function() {
    angular.module('NoteWrangler')
        .controller('NotesIndexController', function($scope, $log, Note) {
            $scope.notes = [];

            Note.all()
                .success(function(data) {
                    $scope.notes = data;
                })
                .error(function() {
                    $log.error("an error occurred while loading data");
                });
        });
})();
