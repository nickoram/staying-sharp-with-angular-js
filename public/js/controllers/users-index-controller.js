(function() {
    angular.module('NoteWrangler')
        .controller('UsersIndexController', function($scope, User) {
            $scope.notes = [];

            User.all()
                .success(function(data) {
                    $scope.users = data;
                    console.log(data);
                });
        });
})();
