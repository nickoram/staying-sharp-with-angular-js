(function() {
    angular.module('NoteWrangler')
        .controller('NotesCreateController', function($scope, $http) {
            $scope.createNote = function(note) {
                $http({method: 'POST', url: '/app/notes', data: note});
            }
        });
})();
