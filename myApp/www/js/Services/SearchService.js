application.service('SearchService', function($http){
	function get(search){




/*			var data = {
				'v' : '1.0',
				'q' : search
			}
			return $http({
			method : 'GET',
			url : 'http://ajax.googleapis.com/ajax/services/search/web',
			params : data

		});*/



		var data = {
			service 		: "user",
			method	 	: "authentification",
			mail	 		: "djflk",
			password	 	: "fd"
		}

		var params=data;

		console.log("data",data);

		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			/*data :  data,*/
			params :  data
		}).success(function(data, status, headers, config) {
		    console.log("fj",data);
		}).error(function(data, status, headers, config) {
		    console.log("fjhk",data);
		});









	}

	return ({
		get : get
	});
})