alors="";
application.service('UserService', function($http){
	function authentification(mail, password){

		var data = {
			service 		: "user",
			method		 	: "authentification",
			mail	 		: mail,
			password	 	: password
		}

		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			async:false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data, status, headers, config) {
			 console.log("valeur dans le success :",data);
			 return "valeur qui vient du succes";
			//return  (!data['error'])?data['response']:false;
			/*if (!data['error']) {
				data['response'];
			} else{
				false;
			};*/


		}).error(function(data, status, headers, config) {
		    console.log("error",data);
		    //false;
		    return "valeur qui vient du error";
		});



	}



	return ({
		authentification : authentification
	});




})