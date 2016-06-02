var mod = angular.module('ng-goToTop', []);

//go to top
mod.directive('gototop', function () {
	return {
		// E : 作为元素 <gototop>
		// A : 作为属性 <div gototop>
		// C : 作为class <div class="gototop">
		// M : 作为注释 <!-- directive: gototop -->
		ristrict: 'E',
		link: function ($scope, element, attr) {
			$(element).hide();

			$(window).on('scroll', function () {
				if ($(this).scrollTop() > 0) {
					$(element).show();
				}
				else {
					$(element).hide();
				}
			})

			$(element).on('click', function () {
				$('body').animate({
					scrollTop: 0
				}, 500);
			})
		}
	}
});