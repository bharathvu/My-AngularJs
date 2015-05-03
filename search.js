'use strict';

angular.module('bharath-directive', ['ui.bootstrap', 'ui.bootstrap.typeahead'])
    .directive('countrySearch', function () {
        return {
            restrict: 'E',
            templateUrl: 'bower_components/bharath-directives/search.html',
            replace: true,
            controller: function ($scope, $http) {
                $scope.getLocation = function (val) {
                    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
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