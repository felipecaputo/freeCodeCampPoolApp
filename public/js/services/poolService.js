var poolService = angular.factory('poolService', function($http) {
    this.getPools = function () {
        return $http.get('/api/pools')
    }
})