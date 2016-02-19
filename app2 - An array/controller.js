app.controller('arrayController', function($scope, theService) {
  $scope.myData = theService.getData();
})
