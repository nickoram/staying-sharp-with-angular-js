(function() {
    angular.module('NoteWrangler')
        .factory('User', function UserFactory($http) {
            return {
                all: function() {
                    return $http({method: 'GET', url: '/data/users.json'});
                }
            };
        });
})();
