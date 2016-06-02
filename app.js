// load css
import 'bootstrap/dist/css/bootstrap.css';
import './public/css/app.less';

//use require() has a error for ng
import routers from './routers.js';

var app = angular.module('app', ['ui.router']);

app.config(routers);

export default app;