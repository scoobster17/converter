(function() {
	angular.module('converter', ['ngRoute'])

	.config(function($routeProvider) {

		$routeProvider

		// home page
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})

		// conversion page
		.when('/conversion', {
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

	})

	.controller('homeCtrl', function($scope) {

		$scope.title = 'Converter';
		$scope.introText = 'Easily convert values between different units of their type, with an instant response.';

		$scope.usage = {
			heading: 'Usage',
			detail: 'No page refreshes, no waiting around. Simply follow these four steps:',
			steps: [
				{
					text: 'Choose your conversion type',
					icon: 'wrench'
				},
				{
					text: 'Pick a unit to convert from',
					icon: 'list'
				},
				{
					text: 'Pick a unit to convert to',
					icon: 'random'
				},
				{
					text: 'Enter your value to convert.',
					icon: 'pencil'
				}
			]
		};

		$scope.conversionTypes = conversions;

	})

	.controller('conversionCtrl', function($scope) {

		$scope.test = 'conversion text';
		$scope.conversionTypes = conversions;

	})

	.controller('tableCtrl', function($scope) {

		$scope.test = 'table text';
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