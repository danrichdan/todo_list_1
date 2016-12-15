
angular.module('tdlApp').service('fbService', function($firebaseObject){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBqTl09yuXNZNFaKdA6rkfojPsWJlTnKVc",
        authDomain: "lfzfirebaseintro.firebaseapp.com",
        databaseURL: "https://lfzfirebaseintro.firebaseio.com",
        storageBucket: "lfzfirebaseintro.appspot.com",
        messagingSenderId: "822389271598"
    };
    firebase.initializeApp(config);

    this.getData = function(){
        var ref = firebase.database().ref().child('todo-list');
        return $firebaseObject(ref);
    }
})


