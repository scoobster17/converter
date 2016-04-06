(function() {
	angular.module('converter', ['ngRoute'])

	.config(function($routeProvider) {

		$routeProvider

		// home page
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
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

	})

	.controller('homeCtrl', function($scope) {

		$scope.test = 'hi there phil';
		$scope.conversionTypes = conversions;

	});

	// data
	var conversions = [
		{
			name: 'weight',
			subTypes: [
				{
					name: 'Grams',
					unit: 'g'
				},
				{
					name: 'Kilograms',
					unit: 'kg'
				}
			]
		},
		{
			name: 'length',
			subTypes: [
				{
					name: 'Millimetres',
					unit: 'mm'
				},
				{
					name: 'Centimetres',
					unit: 'cm'
				}
			]
		}
	];

})();