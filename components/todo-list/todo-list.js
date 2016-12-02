function todoListController(){
     var ctrl = this;
     ctrl.list = [
    {
              title: 'Lecture',
              dueDate: '12/21/2017',
              status: 'open',
              details: 'Talk to people about stuff'
    },
         {
             title: 'Wash Car',
             dueDate: '12/2/2016',
             status: 'open',
             details: 'Hand wax and vacuum'
         },
         {
             title: 'Groceries',
             dueDate: '12/5/2016',
             status: 'open',
             details: 'Eggs, Milk, Bananas, Cereal, Coffee, Cheese, Sugar for coffee'
         },
         {
             title: 'Feed the bear',
             dueDate: '12/2/2016',
             status: 'open',
             details: 'Use caution'
         }
      ]
}
angular.module('tdlApp').component('todoList',{
    templateUrl: './components/todo-list/todo-list.html',
    controller: todoListController
});