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



		/*var data = {
			'service' 		: "ViewRecette",
			'method'	 	: "getAllViewRecettes",
			'mail'	 		: "djflk",
			'password'	 	: "fd"
		}
		var data = {
			'service': "ViewRecette",
			'method': "getAllViewRecettes",
			'mail': "djflk",
			'password': "fd"
		}

		var params=data;

		console.log("data",data);

		return $http({
			method : 'POST',
			url : urlWebService,
			data :  data
			params :  params,
			async:false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
			
		}).success(function(data, status, headers, config) {
		    console.log("success",data);
		}).error(function(data, status, headers, config) {
		    console.log("error",data);
		});

*/







	}

	return ({
		get : get
	});
})