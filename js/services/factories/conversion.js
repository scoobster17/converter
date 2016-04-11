angular.module('converter')
.factory('ConversionsFactory', ['$resource', function($resource) {
	return $resource('http://localhost:4434/conversion/:type', {}, {
		get: {isArray: true}
	});
}]);