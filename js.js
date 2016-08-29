
(function() {
    'use strict';

    var ob1 = {
        parent: 'Duolo'
    };

    var ob2 = Object.create(ob1);
    ob2.parent = 'dilolo';


    function Foo() {

    }

    Foo.prototype.myFal = function() {
        console.log('looop');
    };

    Object.prototype.dude = 123;
    for (var i in ob2) {
        console.log(i);
    }

})();
