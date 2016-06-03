let app = angular.module('timeline', []);

app.directive('timeLine', function () {
	return {
		ristrict: 'A',
		link: function ($scope, element, attr) {

			$(document).ready(function() {
				$.timeliner({
					timelineContainer:'#timeline',
				});
			});
		}
	}
})