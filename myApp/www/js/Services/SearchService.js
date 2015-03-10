application.service('SearchService', function($http){
	function get(search){

			var data = {
				'v' : '1.0',
				'q' : search
			}
			return $http({
			method : 'GET',
			url : 'http://ajax.googleapis.com/ajax/services/search/web',
			params : data

		});
	}

	return ({
		get : get
	});
})