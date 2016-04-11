angular.module('converter')
.controller('homeCtrl', ['$scope', 'ConversionsFactory', function($scope, ConversionsFactory) {

	// data
	$scope.conversionTypes = ConversionsFactory.query();
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

}]);