import '../directive/ng-masonry';

var lifeCtrl = angular.module('Arweil.lifeCtrl', ['ng-masonry']);

lifeCtrl.controller('lifeCtrl', ['$scope', 
	function ($scope) {
		$scope.lifeBlogList = [
			{ title: 'This is a title', content: 'This is a content', img: '/public/img/tx.jpg' },
			{ title: 'This is a title', content: 'This is a content This is a content This is a content', img: '/public/img/test1.jpg' },
			{ title: 'This is a title', content: 'This is a content This is a content This is a content This is a content This is a content This is a content', img: '/public/img/tx.jpg' },
			{ title: 'This is a title', content: 'This is a content', img: '/public/img/tx.jpg' },
			{ title: 'This is a title', content: 'This is a content', img: '/public/img/tx.jpg' },
			{ title: 'This is a title', content: 'This is a content', img: '/public/img/test1.jpg' },
			{ title: 'This is a title', content: 'This is a content', img: '/public/img/tx.jpg' },
			{ title: 'This is a title', content: 'This is a content', img: '/public/img/test1.jpg' },
			{ title: 'This is a title', content: 'This is a content', img: '/public/img/tx.jpg' },
		]
}])