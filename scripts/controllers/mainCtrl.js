var mainCtrl = angular.module('Arweil.mainCtrl', []);

mainCtrl.controller('mainCtrl', ['$scope', 
	function ($scope) {
		$scope.data_main = {
			navList: [
				{ 'name': '主页', 'url': 'home' },
				{ 'name': '工作', 'url': 'work' },
				{ 'name': '生活', 'url': 'life' }
			]
		}
}])