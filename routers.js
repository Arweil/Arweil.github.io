var routing = ['$urlRouterProvider', '$stateProvider',
 function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('AboutMe');

	$stateProvider.state('AboutMe', {
		url: '/AboutMe',
		templateUrl: './views/AboutMe.html'
	});

	$stateProvider.state('Education', {
		url: '/Education',
		templateUrl: './views/Education.html'
	});

	$stateProvider.state('WorkExpericence', {
		url: '/WorkExpericence',
		templateUrl: './views/WorkExpericence.html'
	});

	$stateProvider.state('Skills', {
		url: '/Skills',
		templateUrl: './views/Skills.html'
	});
}]

export default routing;