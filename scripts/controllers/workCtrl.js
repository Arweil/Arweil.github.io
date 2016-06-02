
var workCtrl = angular.module('Arweil.workCtrl', []);

workCtrl.controller('workCtrl', ['$scope', function ($scope) {
	$scope.workBlogList = [
		{ title: 'The title of blog', img: '/public/img/tx.jpg', intro: '张建锋表示，“闲鱼”和“拍卖”都深具分享经济和强互动的社区基因，' + 
			'二者联手后将共同探索包括闲鱼拍卖、闲鱼二手交易、闲鱼二手车在内的多种分享经济业务形态。', updateTime: '2016-05-19', tags: 'tag1 | tag2' },
		{ title: 'The title of blog', img: '/public/img/tx.jpg', intro: '张建锋表示，“闲鱼”和“拍卖”都深具分享经济和强互动的社区基因，' + 
			'二者联手后将共同探索包括闲鱼拍卖、闲鱼二手交易、闲鱼二手车在内的多种分享经济业务形态。', updateTime: '2016-05-19', tags: 'tag1 | tag2' },
		{ title: 'The title of blog', img: '/public/img/tx.jpg', intro: '张建锋表示，“闲鱼”和“拍卖”都深具分享经济和强互动的社区基因，' + 
			'二者联手后将共同探索包括闲鱼拍卖、闲鱼二手交易、闲鱼二手车在内的多种分享经济业务形态。', updateTime: '2016-05-19', tags: 'tag1 | tag2' },
		{ title: 'The title of blog', img: '/public/img/tx.jpg', intro: '张建锋表示，“闲鱼”和“拍卖”都深具分享经济和强互动的社区基因，' + 
			'二者联手后将共同探索包括闲鱼拍卖、闲鱼二手交易、闲鱼二手车在内的多种分享经济业务形态。', updateTime: '2016-05-19', tags: 'tag1 | tag2' },
		{ title: 'The title of blog', img: '/public/img/tx.jpg', intro: '张建锋表示，“闲鱼”和“拍卖”都深具分享经济和强互动的社区基因，' + 
			'二者联手后将共同探索包括闲鱼拍卖、闲鱼二手交易、闲鱼二手车在内的多种分享经济业务形态。', updateTime: '2016-05-19', tags: 'tag1 | tag2' },
	];

	$scope.moreData = function () {
		for (var i = 0, length = 5; i < length; i++) {
			$scope.workBlogList.push({ title: 'The title of blog', img: '/public/img/tx.jpg', intro: '张建锋表示，“闲鱼”和“拍卖”都深具分享经济和强互动的社区基因，' + 
				'二者联手后将共同探索包括闲鱼拍卖、闲鱼二手交易、闲鱼二手车在内的多种分享经济业务形态。', updateTime: '2016-05-19', tags: 'tag1 | tag2' });
		}
	}
}]);