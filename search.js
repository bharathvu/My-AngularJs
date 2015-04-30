var ang = angular.module('bharath-directive', []);
ang.directive('countrySearch', function($timeout, $http) {
    return {
        restrict: 'E',
        templateUrl: 'search.html',
        replace: true,
        controller: function($scope) {
            
            $scope.searchCountry = function() {
                $scope.countries = [];
                if ($scope.searchModel.trim() && $scope.searchModel.trim().length > 1) {
                    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+$scope.searchModel.trim())
                    .success(function(data) {
                        $scope.countryList = data.results[0]["address_components"];
                        for (var i in $scope.countryList) {
                            if (($scope.countryList[i].long_name.toUpperCase()
                                .indexOf($scope.searchModel.toUpperCase().trim()) > -1) || 
                                ($scope.countryList[i].short_name.toUpperCase()
                                .indexOf($scope.searchModel.toUpperCase().trim()) > -1)) {
                                console.log($scope.countryList[i].long_name);
                                inner:
                                for (var j in $scope.countryList[i].types) {
                                    if ($scope.countryList[i].types[j] == "country") {

                                        $scope.countries.push($scope.countryList[i].long_name);
                                        break inner;
                                    }
                                }
                            }
                        }
                    }).error(function(error) {
                        console.error('could not execute ajax!!');
                    });
                }
            };
        }
    };
});