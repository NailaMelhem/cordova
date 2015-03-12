application.controller('UserController', function ($scope, $sce, UserService ){

	$scope.submit = function(){
		//alert($scope.inputMail);
		$scope.searchs
		var dump = UserService.authentification($scope.inputMail, $scope.inputPassword ).success(
				function(data){
					//$scope.searchs = data;
					console.log("controlleur valeur recu",data);
				}
			);	

		console.log('apres :', dump);
	} 
	
	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}

});