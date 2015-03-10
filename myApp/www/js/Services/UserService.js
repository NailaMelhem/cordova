application.service('UserService', function($http){
	function authentification(mail, password){






		//VERSION ANGULARJS
		alert(mail +"#"+password);
		var data = {
			'mail' 		: mail,
			'password' 	: password,
			'service' 	: 'user',
			'method' 	: 'authentification'
		}
		console.log("avant ",data);
		return $http({
			method : 'POST',
			url : urlWebService,
			params : data
		});




			//VERSION JQUERY
		/*jsonData = 
		{
			'mail' 		: mail,
			'password' 	: password,
			'service' 	: 'user',
			'method' 	: 'authentification'

		}

		console.log("jsondata",mail,jsonData);

	    data=$.ajax({
	        type: 'POST',
	        data: jsonData,
	        url: urlWebService,
	        dataType: 'json',
	        async :false,
	        success: function(data) {

	            //console.log("console 1",data);
	            return data;
	        }

	    });*/
		//console.log("console 2",data['responseJSON']);







	}

	return ({
		authentifications : authentification
	});
})