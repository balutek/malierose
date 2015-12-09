var angular = require('angular');
var bootstrap = require('angular-ui-bootstrap');
//var ngAnimate = require('angular-animate');
var ngRoute = require('angular-route');

var app = angular.module('app', [bootstrap, ngRoute]);


var NavbarController = require('./controllers/NavbarController');
var CarouselController = require('./controllers/CarouselController');

var AboutController = require('./controllers/views/AboutController');
var BuildingHousesController = require('./controllers/views/BuildingHousesController');

app.controller('NavbarController', NavbarController);
app.controller('CarouselController', CarouselController);

app.controller('AboutController', AboutController);
app.controller('BuildingHousesController', BuildingHousesController);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })
    .when('/buildingHouses', {
      templateUrl: 'views/building_houses.html',
      controller: 'BuildingHousesController'
    })
    .otherwise({
      redirectTo: '/about'
    });

}]);

