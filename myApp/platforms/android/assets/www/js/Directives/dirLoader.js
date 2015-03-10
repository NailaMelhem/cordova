'use strict';

application.directive('dirLoader', function(){

	return {
		restrict : 'A',
		scope : false,
		link : function(scope, element, attr){
			scope.$watch(attr.dirLoader, function watchAttr(value){
				if (angular.isDefined(value) && angular.isDefined(value.finally)) {
					element.addClass('loader');

					value.error(function(data){
						element.removeClass('loader');
						element.html('<h2>Erreur de connexion</h2><p>Données non trouvées</p>');
					});

					value.finally(function(){
						element.removeClass('loader');
					});
				}
			});
		}
	};
});