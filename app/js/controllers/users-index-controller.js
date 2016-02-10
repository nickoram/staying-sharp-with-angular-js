(function() {
    angular.module('NoteWrangler')
        .controller('UsersIndexController', function($http, $scope) {
            $scope.notes = [];

            $http({method: 'GET', url: '/app/data/users.json'})
                .success(function(data) {
                    $scope.users = data;
                })
        });
})();
