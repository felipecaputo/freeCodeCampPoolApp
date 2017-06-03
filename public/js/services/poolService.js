var poolService = angular.module('poolsApp').factory('poolService', function($http) {
    this.poolsList = [];
    
    this.getPools = function () {
        return $http.get('/api/pools')
            .then( function (res) {
                console.log('/api/pools', res);
                this.poolsList = res.data.data;
            });
    }

    this.getPool = function(id) {
        for(var i=0; i<this.poolsList.length; i++) {
            if(this.poolsList[i].id == id) return this.poolsList[i];
        }
    }

    return this
})