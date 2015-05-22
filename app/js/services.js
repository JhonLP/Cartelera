'use strict';
angular.module('myApp.services', []).
  value('version', '0.1')
  .constant('API_KEY','9dvdcngfbkht47ndecmurgsz')

   .factory('rtmFactory', ['$http','API_KEY',function($http,API_KEY) {
    var countries = [
    {name: 'México',code: 'mx'}, 
    {name: 'Reino Unido',code: 'uk'}, 
    {name: 'España',code: 'es'}
    ];
    return {
        getCountries: function() {
            return countries;
        },
        getMovies:function(countryCode){
        
        return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=20&country='+countryCode+'&callback=JSON_CALLBACK&apikey='+API_KEY)
        
   
    }

    }
}])
