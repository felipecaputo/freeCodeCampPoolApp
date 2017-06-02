function PoolsListController($scope) {
    var ctrl = this;

    ctrl.poolsList = [
        {
            title: "Do you prefer React or Angular?",
            author: { displayName : "Felipe Caputo" },
            publishDate: new Date(2017, 06, 01, 11, 2)
        },
        {
            title: "Wich is the best cook in the world?",
            author: { displayName : "Léla Caputo" },
            publishDate: new Date(2017, 06, 01, 11, 2)
        },
        {
            title: "Best Assassin's Creed game ever?",
            author: { displayName : "Felipe Caputo" },
            publishDate: new Date(2017, 06, 01, 11, 2)
        },
        {
            title: "Which is the best RPG game?",
            author: { displayName : "Felipe Caputo" },
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