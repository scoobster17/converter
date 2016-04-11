angular.module('converter')
.config(function($routeProvider) {

	$routeProvider

	// home page
	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})

	// conversion page
	.when('/conversion/:type', {
		templateUrl: 'templates/conversion.html',
		controller: 'conversionCtrl'
	})

	// conversion table
	.when('/table', {
		templateUrl: 'templates/conversionTable.html',
		controller: 'tableCtrl'
	})

	// otherwise re-direct to home
	.otherwise({
		redirectTo: '/'
	})

});