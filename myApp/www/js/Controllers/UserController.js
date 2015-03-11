application.controller('UserController', function ($scope, $sce, UserService ){

	$scope.submit = function(){
		//alert($scope.inputMail);
		$scope.searchs = UserService.authentification($scope.inputMail, $scope.inputPassword ).success(
				function(data){
					//$scope.searchs = data;
					//}console.log("controlleur",data);
				}
			)
	} 

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}

});