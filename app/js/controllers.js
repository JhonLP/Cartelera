'use strict';
angular.module('myApp.controllers', [])
.controller('ListaPelisCtrl', ['$scope', 'rtmFactory','$filter',
    function($scope, rtmFactory) {
        $scope.countries = rtmFactory.getCountries();
        
        $scope.loadMovies = function(countryCode) {
            rtmFactory.getMovies(countryCode).then(
                function(response) {

                    var movieArray = response.data.movies;
                    console.log(JSON.stringify(movieArray))
                    $scope.movies= movieArray;


                },
                function(response) {
                    // error message
                }
            )
        };

        $scope.loadMovies('mx');



         }
])
    .filter('chgimg', function() {
        return function(text) {
            return text.replace("tmb","det")
        }
    })

