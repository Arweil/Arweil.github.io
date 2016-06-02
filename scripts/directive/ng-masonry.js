//依赖于masonry & imagesLoaded
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesLoaded';
imagesLoaded.makeJQueryPlugin($);

var mod = angular.module('ng-masonry', []);
mod.directive('masonry', function () {
	return {
		ristrict: 'E',
		link: function ($scope, element, attr) {
			$('.grid').imagesLoaded(function () {
				var msnry = new Masonry('.grid', {
					columnWidth: '.grid-item',
					itemSelector: '.grid-item',
					percentPosition: true
				})
			})
		}
	}
});