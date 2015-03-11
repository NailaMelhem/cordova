alors="";
application.service('UserService', function($http){
	function authentification(mail, password){


/*		jsonData = {
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
	    return alors;*/


		var data = {
			service 		: "user",
			method		 	: "authentification",
			mail	 		: mail,
			password	 	: password
		}

		var params=data;

		console.log("datass",data);

		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			/*params :  data,*/
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data, status, headers, config) {
		    console.log("succes",data);
		}).error(function(data, status, headers, config) {
		    console.log("error",data);
		});


		/*
		var data = {
			service 		: 'user',
			method	 		: 'authentification',
			mail	 		: mail,
			password	 	: password
		}
		$http.post(urlWebService, {service: "ViewRecette", method: "getAllViewRecettes"} ).
		  success(function(data, status, headers, config) {
		    console.log("ici",data);
		  }).
		  error(function(data, status, headers, config) {
		    console.log(data);
		  });*/


	}



	return ({
		authentification : authentification
	});




})