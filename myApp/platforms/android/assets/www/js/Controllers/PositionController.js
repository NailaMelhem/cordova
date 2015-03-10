application.controller('PositionController', function ($scope, GeolocationService){
	
	$scope.position;

	/*
	$scope.findme = function(){
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.position = position;
			console.log($scope.position, position);
		})
	}
	*/


	$scope.findme = function(){
		$scope.position = GeolocationService.myPosition().then(
			function(position){
				$scope.position = position
				console.log(position);
			},
			function(){
				console.log("Erreur PositionController");
			})
	}

});