alors="";
application.service('UserService', function($http){
	function connect(mail, password){

		return $http({
			method : 'POST',
			url : urlWebService,
			//data : $.param({service: 'user', method: 'authentification', mail: mail, password: password}),
			//data: $.param({params: JSON.stringify({service: 'user', method: 'authentification', mail: mail, password: password})}),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data : $.param({service: 'user', method: 'authentification', mail: mail, password: password}),
			cache : false
		})

/*
		var data = {
			'service' 		: 'user',
			'method'	 	: 'authentification',
			'mail'	 		: mail,
			'password'	 	: password
		}
		$http.post(urlWebService, data).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log(data);
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  }); */


	}



	return ({
		connect : connect
	});




})