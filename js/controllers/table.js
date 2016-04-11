angular.module('converter')
.controller('tableCtrl', ['$scope', 'ConversionsFactory', function($scope, ConversionsFactory) {

	// data
	$scope.conversionTypes = ConversionsFactory.query();

	// page details
	$scope.title = 'Conversion Table';
	$scope.introText = 'Here is a quick reference for conversion rates.';

}]);