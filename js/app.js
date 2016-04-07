(function() {
	angular.module('converter', ['ngRoute'])

	// routing
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

		// data
		$scope.conversionTypes = conversions;
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

		// page details
		$scope.title = 'Converter';
		$scope.introText = 'Easily convert values between different units of their type, with an instant response.';

	})

	.controller('conversionCtrl', ['$scope', '$location', function($scope, $location) {

		// data
		$scope.urlParams = $location.search();
		var conversionMatches = $.grep(conversions, function(conversionObj){
			return conversionObj.name == $scope.urlParams.type;
		});
		$scope.conversionDetails = conversionMatches[0];

		// page details
		$scope.title = ' Conversion';

		$scope.getConversionRates = function (name) {
			var conversionFromDetails = $scope.conversionDetails.subTypes.filter(function (subType) {
				return subType.name === name;
			});
			$scope.conversionRates = conversionFromDetails[0].rates;
		};

	}])

	.controller('tableCtrl', function($scope) {

		// data
		$scope.conversionTypes = conversions;

		// page details
		$scope.title = 'Conversion Table';
		$scope.introText = 'Easily convert values between different units of their type, with an instant response.';

	});

	// data
	var conversions = [
		{
			name: 'Weight',
			subTypes: [
				{
					name: 'Grams',
					unit: 'g',
					rates: {
						Kilograms: 0.001,
						Pounds: 100 // fake
					}
				},
				{
					name: 'Kilograms',
					unit: 'kg',
					rates: {
						Grams: 1000,
						Pounds: 1000 // fake
					}
				},
				{
					name: 'Pounds',
					unit: 'lb',
					rates: {
						Grams: 2, // fake
						Kilograms: 4 // fake
					}
				}
			]
		},
		{
			name: 'Length',
			subTypes: [
				{
					name: 'Millimetres',
					unit: 'mm',
					rates: {
						Centimetres: '.1'
					}
				},
				{
					name: 'Centimetres',
					unit: 'cm',
					rates: {
						Millimetres: 10
					}
				}
			]
		}
	];

})();