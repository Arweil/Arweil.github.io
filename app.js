// load css
import 'bootstrap/dist/css/bootstrap.css';
import './public/css/app.css';

//use require() has a error for ng
import routers from './routers.js';

//load directive
import './scripts/directive/ng-go-to-top.js';

//load controllers
import './scripts/controllers/mainCtrl.js';
import './scripts/controllers/homeCtrl.js';
import './scripts/controllers/workCtrl.js';
import './scripts/controllers/lifeCtrl.js';

var app = angular.module('app', ['ui.router', 
	'infinite-scroll', 'ng-goToTop',
	'Arweil.mainCtrl',
	'Arweil.homeCtrl',
	'Arweil.workCtrl',
	'Arweil.lifeCtrl'
]);

app.config(routers);

export default app;