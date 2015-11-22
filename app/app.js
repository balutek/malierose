require('angular');
var bootstrap = require('angular-ui-bootstrap');

var app = angular.module('app', [bootstrap]);

var MainController = require('./controllers/MainController');

app.controller('MainController', ['$scope', MainController]);

