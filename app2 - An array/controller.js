angular.module('arrayApp').controller('arrayController', function($scope, theService) {
  $scope.myData = theService.getData();
})
