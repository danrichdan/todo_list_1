function listDetailsController(){

}

angular.module('tdlApp').component('listDetails',{
    templateUrl:'./components/list-details/list-details.html',
    controller: listDetailsController,
    bindings: {
        listItem: '<'
    }
})