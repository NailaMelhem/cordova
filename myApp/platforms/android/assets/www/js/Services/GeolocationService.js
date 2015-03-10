application.service('GeolocationService', function ($window, $q, $rootScope){
	
	var geolocation = $window.navigator.geolocation;

	function myPosition(){


		//permet d'appeler les différentes méthode en cas de succès ou en cas d'erreur
		var defer = $q.defer();

		geolocation.getCurrentPosition(

			function(position){
				$rootScope.$apply(function(){
					defer.resolve(position);
				})
			},
			function(){
				$rootScope.$apply(function(){
					defer.reject();
				})
			}
		)
		return defer.promise;
	};

	return ({
		myPosition : myPosition
	});
});