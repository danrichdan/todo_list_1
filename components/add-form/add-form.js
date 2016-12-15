function addFormController(){
   var ctrl = this;
    ctrl.addItem = function(){
        ctrl.onAdd({todoListItem: ctrl.item})
        ctrl.item = {};
    }
}

angular.module('tdlApp').component('addForm', {
    templateUrl: './components/add-form/add-form.html',
    controller: addFormController,
    bindings: {
        onAdd: '&'
    }
});