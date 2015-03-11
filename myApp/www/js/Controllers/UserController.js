application.controller('UserController', function ($scope, $sce, UserService){

	$scope.submit = function(){
		alert($scope.inputMail);
		UserService.connect($scope.inputMail, $scope.inputPassword )
			.success(
				function(data){
					console.log(data);
				}
			)
	} 

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}

});