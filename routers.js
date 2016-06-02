var routing = ['$urlRouterProvider', '$stateProvider',
 function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('home');

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: './views/home.html',
		controller: 'homeCtrl'
	});

	$stateProvider.state('work', {
		url: '/work',
		templateUrl: './views/work.html',
		controller: 'workCtrl'
	});

	$stateProvider.state('life', {
		url: '/life',
		templateUrl: './views/life.html',
		controller: 'lifeCtrl'
	});
}]

export default routing;