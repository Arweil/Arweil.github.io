var mainCtrl = angular.module('Arweil.mainCtrl', []);

mainCtrl.controller('mainCtrl', ['$scope', 
	function ($scope) {
		console.log('mainCtrl');

		$scope.data_main = {
			navList: [
				{ 'name': 'Home', 'url': 'home' },
				{ 'name': 'Work', 'url': 'work' },
				{ 'name': 'Life', 'url': 'life' }
			]
		}
}])