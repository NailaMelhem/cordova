// application est le nom qu'on a donné à notre "angular" dans index.html
// On déclare un controller qui aura certaines constantes, le RecettesService permet
//  de charget les fonctions qu'on a déclarées dans ce service
// 
application.controller('RecettesController', function ($scope, $sce, RecettesService ){

	$scope.submit = function(){
		//$scope, permet de déclarer une variable
		$scope.recettes = RecettesService.getAllRecettes().success(
				function(data){
					// une fois qu'il a réussi à récupérer les recettes, on les stocke dans la variables recettes
					$scope.recettes = data['response'];
					console.log("controlleur valeur recu",data);
				}
		);	

		//console.log('apres :', dump);
	} 
	// Tu passes du html à la fonction et il considère ça comme du html ça
	// permet de transformer ça ok j'ai capté
	// continuons
	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);

	}


$scope.afficherRecette = function(idRecette){
	$scope.fullRecette = RecettesService.getRecette(idRecette).success(
		function(data){
			$scope.fullRecette = data['response'];
			console.log("controlleur valeur de la recette",data);

		}
	);
}
// 



});