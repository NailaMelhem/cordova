
application.controller('UserController', function ($scope, $sce, UserService){

	$scope.submit = function(){
		alert("ici");
		//$scope.inputReponse = UserService.authentification($scope.inputMail, $scope.inputPassword).success(
		$scope.inputReponse = UserService.authentification("mail1@hotmail.com", "azerty").success(
				function(data){
					//$scope.searchs = data;
					alert("la");
					console.log("dans le controleur",data);
				}
		)
	
	} 

/*	$scope.showHtml = function(stringHtml){
		console.log(alert($sce.trustAsHtml(stringHtml) )  );
		return $sce.trustAsHtml(stringHtml);
	}*/

});