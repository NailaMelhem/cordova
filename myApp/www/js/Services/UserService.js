alors="";
application.service('UserService', function($http){
	function authentification(mail, password){


		jsonData = {
			'service' 		: 'user',
			'method'	 	: 'authentification',
			'mail'	 		: "samt@gamil.com",//mail+"",
			'password'	 	: password+""
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

/*
		var data = {
			service 		: "user",
			method	 	: "authentification",
			mail	 		: mail,
			password	 	: password
		}

		var params=data;

		console.log("data",data);

		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data :  data,
			params :  data
		}).success(function(data, status, headers, config) {
		    console.log("fj",data);
		}).error(function(data, status, headers, config) {
		    console.log("fjhk",data);
		});


		/*var data = {
			service 		: 'user',
			method	 	: 'authentification',
			mail	 		: mail,
			password	 	: password
		}
		$http.post(urlWebService, data).
		  success(function(data, status, headers, config) {
		    console.log(data);
		  }).
		  error(function(data, status, headers, config) {
		    console.log(data);
		  });*/


	}



	return ({
		authentification : authentification
	});




})