function PoolsListController($scope, poolService) {
    var ctrl = this;

    poolService.getPools();

    $scope.$watch( 
        function() { return poolService.poolsList },
        function() { console.log('updated pool list', poolService.poolsList); ctrl.poolsList = poolService.poolsList }  )
    
    ctrl.poolsList = [
        {
            id: 1,
            title: "Do you prefer React or Angular?",
            author: { userName: "felipecaputo", displayName : "Felipe Caputo" },
            publishDate: new Date(2017, 06, 01, 11, 2)
        },
        {
            id: 4,
            title: "Wich is the best cook in the world?",
            author: { userName: "lelacaputo", displayName : "Léla Caputo" },
            publishDate: new Date(2017, 06, 01, 11, 2)
        },
        {
            id: 3,
            title: "Best Assassin's Creed game ever?",
            author: { userName: "felipecaputo", displayName : "Felipe Caputo" },
            publishDate: new Date(2017, 06, 01, 11, 2)
        },
        {
            id: 2,
            title: "Which is the best RPG game?",
            author: { userName: "felipecaputo", displayName : "Felipe Caputo" },
            publishDate: new Date(2017, 06, 01, 11, 2)
        }
    ]

    $scope.poolsList = ctrl.poolsList;
}

angular.module('poolsApp').component('poolsList', {
    templateUrl: 'public/js/components/poolsList.html',
    controller: PoolsListController,
    controllerAs: "ctrl"
})