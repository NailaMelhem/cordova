alors="";
application.service('UserService', function($http){
	function authentification(mail, password){


		/*jsonData = {
			'service' 		: 'user',
			'method'	 	: 'authentification',
			'mail'	 		: mail,
			'password'	 	: password
		}
	   	$.ajax({
	        type: 'POST',
	        data: jsonData,
	        url: urlWebService,
	        dataType: 'json',
	        async:true,
	        success: function(data) {
	        	console.log(data);
	        	alors= data;
	        }
	    });
	    return alors;

		var data = {
			'service' 		: 'user',
			'method'	 	: 'authentification',
			'mail'	 		: mail,
			'password'	 	: password
		}

		console.log("data",data);

		return $http({
			method : 'POST',
			url : urlWebService,
			params : data
		})

*/
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
		  });


	}



	return ({
		authentification : authentification
	});




})