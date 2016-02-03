(function() {
    angular.module('NoteWrangler')
        .controller('NotesIndexController', function($http, $log) {
            var controller = this;
            controller.notes = [];

            $http({method: 'GET', url: '/app/data/notes.json'})
                .success(function(data) {
                    controller.notes = data;
                })
                .error(function() {
                    $log.error("an error occurred while loading data");
                });
        });
})();
