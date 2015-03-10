application.controller('HomeController', function ($scope, $sce, SearchService){

	$scope.submit = function(){
		$scope.searchs = SearchService.get($scope.inputSearch).success(
				function(data){
					$scope.searchs = data;
					console.log(data);
				}
			)
	} 

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}

});