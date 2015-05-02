var ang = angular.module('bharath-directive', ['ui.bootstrap']);
ang.directive('countrySearch', function () {
    return {
        restrict: 'E',
        templateUrl: 'search.html',
        replace: true
    };
});