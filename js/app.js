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

		// config
		var conversionObjDefaultState = {
			from: '-1',
			to: '-1',
			value: ''
		};
		$scope.setConversionObjToDefaults = function () {
			for (var prop in conversionObjDefaultState) {
				$scope.conversion[prop] = conversionObjDefaultState[prop];
			}
		};

		// initialise conversion object
		$scope.conversion = {};
		$scope.setConversionObjToDefaults();

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

		// fix JS issue with adding decimals
		$scope.correctDecimalValue = function(a, b) {
			// Source: http://stackoverflow.com/a/10474055
			// return Math.round((a * b) * 10) / 10;

			// above not working so simply going to round to a specified number
			// if there is a float
			var result = a * b;
			if (result % 1 === 0) {
				return result;
			} else {
				return (a * b).toFixed(3);
			}
		}

		$scope.clearFormValues = function (clearFromField) {

			if(event && event.type == 'click') event.preventDefault();

			switch (clearFromField) {
				case 'value':
					$scope.conversion['value'] = conversionObjDefaultState['value'];
					break;
				case 'to':
					$scope.conversion['to'] = conversionObjDefaultState['to'];
					$scope.conversion['value'] = conversionObjDefaultState['value'];
					break;
				case 'from':
				default:
					$scope.setConversionObjToDefaults();
					break;
			}
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