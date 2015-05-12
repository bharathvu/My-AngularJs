'use strict';

angular.module('bharath-directive', ['ui.bootstrap']);
angular.module('bharath-directive')
    .directive('countrySearch', function () {
        return {
            restrict: 'E',
            templateUrl: 'GOOGLE_API_URL',
            replace: true,
            controller: function ($scope, $http) {
                $scope.getLocation = function (val) {
                    return $http.get($scope.google_api_url, {
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