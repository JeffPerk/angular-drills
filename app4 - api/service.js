angular.module('apiApp').service('swSvc', function($http, $q) {
  var baseUrl = 'http://swapi.co/api/';

  this.getStarships = function() {
    var deferred = $q.defer(); //Promise 1

    $http({   //Promise 2
      method: 'GET',
      url: baseUrl + 'starships/'
    }).then(function(response) {
      deferred.resolve(response.data)
    }, function(err) {
      console.error(err);
    })



    return deferred.promise;
  }
})
