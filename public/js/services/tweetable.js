(function() {
    angular.module('NoteWrangler')
        .factory('Tweetable', function TweetableFactory($http) {
            var characterLength = 255;

            return {
                tweetThat: function(potentialTweet) {
                    return $http({
                        method: 'POST',
                        url: 'http://gentle-spire-1153.herokuapp.com/tweet',
                        data: {
                            description: potentialTweet,
                            maxLength: characterLength
                        }
                    });
                }
            };
        });
})();
