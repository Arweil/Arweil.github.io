// load css
import 'bootstrap/dist/css/bootstrap.css';
import './public/css/app.less';

import './public/css/timeliner.less';

//use require() has a error for ng
import routers from './routers.js';
import './scripts/directive/timeLine.js';

var app = angular.module('app', ['ui.router', 'timeline']);

app.directive('navList', function () {
	return {
		ristrict: 'A',
		link: function ($scope, element, attr) {

			$(element).find('a').on('click', function () {
				let $that = $(this);
				let $navs = $(element).find('a');

				$navs.removeClass('active');
				$that.addClass('active');
			})
		}
	}
})

app.config(routers);

export default app;