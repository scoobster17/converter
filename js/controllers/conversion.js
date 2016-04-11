angular.module('converter')
.controller('conversionCtrl', ['$scope', '$location', '$routeParams', 'ConversionsFactory', function($scope, $location, $routeParams, ConversionsFactory) {

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
	$scope.step = 1;

	// initialise conversion object
	$scope.conversion = {};
	$scope.setConversionObjToDefaults();

	// data
	$scope.conversionDetails = ConversionsFactory.get({type: $routeParams.type});

	// page details
	$scope.title = ' Conversion';

	$scope.getConversionRates = function (name) {
		var conversionFromDetails = $scope.conversionDetails[0].subTypes.filter(function (subType) {
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
	};

	$scope.clearFormValues = function (clearFromField) {

		if(event && event.type == 'click') event.preventDefault();

		switch (clearFromField) {
			case 'value':
				$scope.conversion['value'] = conversionObjDefaultState['value'];
				$scope.step = 3;
				break;
			case 'to':
				$scope.conversion['to'] = conversionObjDefaultState['to'];
				$scope.conversion['value'] = conversionObjDefaultState['value'];
				$scope.step = 2;
				break;
			case 'from':
			default:
				$scope.setConversionObjToDefaults();
				$scope.step = 1;
				break;
		}
	};

}]);