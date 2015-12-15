var angular = require('angular');
var bootstrap = require('angular-ui-bootstrap');
var ngAnimate = require('angular-animate');
var ngRoute = require('angular-route');

var app = angular.module('app', [bootstrap, ngRoute, ngAnimate]);


var NavbarController = require('./controllers/NavbarController');

var AboutController = require('./controllers/views/AboutController');
var GalleryController = require('./controllers/views/GalleryController');
var BuildingHousesController = require('./controllers/views/BuildingHousesController');

app.controller('NavbarController', NavbarController);

app.controller('AboutController', AboutController);
app.controller('GalleryController', GalleryController);
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
    .when('/gallery', {
      templateUrl: 'views/gallery.html',
      controller: 'GalleryController'
    })
    .otherwise({
      redirectTo: '/about'
    });

}]);

