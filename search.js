'use strict';

angular.module('bharath-directives', ['ui.bootstrap']);
angular.module('bharath-directives')
    .directive('countrySearch', function () {
        return {
            restrict: 'E',
            templateUrl: 'bower_components/bharath-directives/search.html',
            replace: true,
            controller: function ($scope, $http) {
                $scope.getLocation = function (val) {
                    return $http.get('GOOGLE_API_URL', {
                        params: {
                            address: val,
                            sensor: false
                        }
                    }).then(function (response) {
                        return response.data.results.map(function (item) {
                            return item.formatted_address;
                        });
                    });
                };
            }
        };
    });